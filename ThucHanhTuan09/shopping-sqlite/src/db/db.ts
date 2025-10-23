// src/db/db.ts
import { Platform } from 'react-native';
import { openDatabaseSync } from 'expo-sqlite';

let isWeb = Platform.OS === 'web';

// --- Web fallback (localStorage) ---
const createWebStore = () => {
    const seedKey = 'shopping_products_seed_v1';
    const cartKey = 'shopping_cart_items_v1';

    const ensureSeed = () => {
        if (!localStorage.getItem(seedKey)) {
            const sample = [
                { product_id: 'P01', name: 'Áo thun', price: 120000, stock: 20 },
                { product_id: 'P02', name: 'Quần jean', price: 250000, stock: 15 },
                { product_id: 'P03', name: 'Giày sneaker', price: 800000, stock: 10 },
                { product_id: 'P04', name: 'Mũ lưỡi trai', price: 90000, stock: 25 },
            ];
            localStorage.setItem(seedKey, JSON.stringify(sample));
        }
        if (!localStorage.getItem(cartKey)) {
            localStorage.setItem(cartKey, JSON.stringify([]));
        }
    };

    ensureSeed();

    return {
        execAsync: async (_sql: string) => ({ rows: { _array: [] } }),

        runAsync: async (sql: string, params?: any[]) => {
            // INSERT INTO cart_items
            if (/INSERT INTO cart_items/i.test(sql) && params) {
                const raw = localStorage.getItem(cartKey);
                const arr = raw ? JSON.parse(raw) : [];
                const newId = arr.length > 0 ? Math.max(...arr.map((x: any) => x.id)) + 1 : 1;
                arr.push({ id: newId, product_id: params[0], qty: params[1] });
                localStorage.setItem(cartKey, JSON.stringify(arr));
            }

            // UPDATE cart_items SET qty = qty + 1
            else if (/UPDATE cart_items SET qty = qty \+ 1/i.test(sql) && params) {
                const raw = localStorage.getItem(cartKey);
                const arr = raw ? JSON.parse(raw) : [];
                const updated = arr.map((item: any) =>
                    item.id === params[0] ? { ...item, qty: item.qty + 1 } : item
                );
                localStorage.setItem(cartKey, JSON.stringify(updated));
            }

            // UPDATE cart_items SET qty = ?
            else if (/UPDATE cart_items SET qty = \?/i.test(sql) && params) {
                const raw = localStorage.getItem(cartKey);
                const arr = raw ? JSON.parse(raw) : [];
                const updated = arr.map((item: any) =>
                    item.id === params[1] ? { ...item, qty: params[0] } : item
                );
                localStorage.setItem(cartKey, JSON.stringify(updated));
            }

            // DELETE FROM cart_items WHERE id = ?
            else if (/DELETE FROM cart_items WHERE id = \?/i.test(sql) && params) {
                const raw = localStorage.getItem(cartKey);
                const arr = raw ? JSON.parse(raw) : [];
                const filtered = arr.filter((item: any) => item.id !== params[0]);
                localStorage.setItem(cartKey, JSON.stringify(filtered));
            }

            // DELETE FROM cart_items (clear all)
            else if (/DELETE FROM cart_items/i.test(sql)) {
                localStorage.setItem(cartKey, JSON.stringify([]));
            }

            // UPDATE products SET stock = stock - ?
            else if (/UPDATE products SET stock = stock - \?/i.test(sql) && params) {
                const raw = localStorage.getItem(seedKey);
                const products = raw ? JSON.parse(raw) : [];
                const updated = products.map((p: any) =>
                    p.product_id === params[1] ? { ...p, stock: p.stock - params[0] } : p
                );
                localStorage.setItem(seedKey, JSON.stringify(updated));
            }
        },

        getAllAsync: async <T = any>(sql: string, params?: any[]): Promise<T[]> => {
            // SELECT * FROM products
            if (/FROM\s+products/i.test(sql) && !/JOIN/i.test(sql)) {
                const raw = localStorage.getItem(seedKey);
                return (raw ? JSON.parse(raw) : []) as T[];
            }

            // SELECT cart_items JOIN products
            if (/FROM\s+cart_items.*JOIN.*products/i.test(sql)) {
                const cartRaw = localStorage.getItem(cartKey);
                const prodRaw = localStorage.getItem(seedKey);
                const cart = cartRaw ? JSON.parse(cartRaw) : [];
                const products = prodRaw ? JSON.parse(prodRaw) : [];

                return cart.map((c: any) => {
                    const p = products.find((x: any) => x.product_id === c.product_id);
                    return {
                        id: c.id,
                        product_id: c.product_id,
                        qty: c.qty,
                        name: p?.name || '',
                        price: p?.price || 0,
                        stock: p?.stock || 0,
                    };
                }) as T[];
            }

            return [] as T[];
        },

        getFirstAsync: async <T = any>(sql: string, params?: any[]): Promise<T | null> => {
            // SELECT stock FROM products WHERE product_id = ?
            if (/SELECT stock FROM products WHERE product_id = \?/i.test(sql) && params) {
                const raw = localStorage.getItem(seedKey);
                const products = raw ? JSON.parse(raw) : [];
                const found = products.find((p: any) => p.product_id === params[0]);
                return found ? { stock: found.stock } as T : null;
            }

            // SELECT id, qty FROM cart_items WHERE product_id = ?
            if (/SELECT id, qty FROM cart_items WHERE product_id = \?/i.test(sql) && params) {
                const raw = localStorage.getItem(cartKey);
                const cart = raw ? JSON.parse(raw) : [];
                const found = cart.find((c: any) => c.product_id === params[0]);
                return found ? { id: found.id, qty: found.qty } as T : null;
            }

            // SELECT product_id FROM cart_items WHERE id = ?
            if (/SELECT product_id FROM cart_items WHERE id = \?/i.test(sql) && params) {
                const raw = localStorage.getItem(cartKey);
                const cart = raw ? JSON.parse(raw) : [];
                const found = cart.find((c: any) => c.id === params[0]);
                return found ? { product_id: found.product_id } as T : null;
            }

            const all = await createWebStore().getAllAsync<T>(sql, params);
            return all && all.length ? all[0] : null;
        },
    };
};

// --- Native SQLite ---
const wrapNativeDb = (nativeDb: any) => ({
    execAsync: async (sql: string) => {
        try {
            const result = await nativeDb.execAsync(sql);
            return result;
        } catch (err) {
            console.error('❌ execAsync lỗi:', err);
            throw err;
        }
    },

    runAsync: async (sql: string, params?: any[]) => {
        try {
            return await nativeDb.runAsync(sql, params || []);
        } catch (err) {
            console.error('❌ runAsync lỗi:', err);
            throw err;
        }
    },

    getAllAsync: async <T = any>(sql: string, params?: any[]): Promise<T[]> => {
        try {
            const result = await nativeDb.getAllAsync(sql, params || []);
            return result || [];
        } catch (err) {
            console.error('❌ getAllAsync lỗi:', err);
            return [];
        }
    },

    getFirstAsync: async <T = any>(sql: string, params?: any[]): Promise<T | null> => {
        try {
            const result = await nativeDb.getFirstAsync(sql, params || []);
            return result || null;
        } catch (err) {
            console.error('❌ getFirstAsync lỗi:', err);
            return null;
        }
    },
});

export let db: any = null;

export const initDb = async () => {
    if (db) {
        console.log('⚠️ DB đã được khởi tạo trước đó');
        return;
    }

    if (isWeb) {
        db = createWebStore();
        console.log('✅ DB khởi tạo trên web (localStorage)');
        return;
    }

    // ✅ Native SQLite
    const nativeDb = openDatabaseSync('shopping.db');
    db = wrapNativeDb(nativeDb);

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS products(
            product_id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            price REAL NOT NULL CHECK(price >= 0),
            stock INTEGER NOT NULL CHECK(stock >= 0)
        );
    `);

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS cart_items(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT NOT NULL,
            qty INTEGER NOT NULL CHECK(qty > 0),
            UNIQUE(product_id),
            FOREIGN KEY(product_id) REFERENCES products(product_id)
        );
    `);

    const rows: any[] = await db.getAllAsync('SELECT * FROM products LIMIT 1');
    if (!rows || rows.length === 0) {
        const sample = [
            ['P01', 'Áo thun', 120000, 20],
            ['P02', 'Quần jean', 250000, 15],
            ['P03', 'Giày sneaker', 800000, 10],
            ['P04', 'Mũ lưỡi trai', 90000, 25],
        ];

        for (const [id, name, price, stock] of sample) {
            await db.runAsync(
                'INSERT OR REPLACE INTO products (product_id, name, price, stock) VALUES (?, ?, ?, ?)',
                [id, name, price, stock]
            );
        }
        console.log('✅ Đã seed dữ liệu mẫu vào products');
    }

    console.log('✅ Database SQLite đã khởi tạo xong');
};

export const getDb = () => {
    if (!db) throw new Error('DB chưa được init. Gọi initDb() trước.');
    return db;
};

export default db;