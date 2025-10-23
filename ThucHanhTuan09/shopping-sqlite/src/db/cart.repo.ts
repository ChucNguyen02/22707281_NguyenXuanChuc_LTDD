// src/db/cart.repo.ts
import { getDb } from './db';
import { CartItem } from '../models/types';

export const getCartItems = async (): Promise<CartItem[]> => {
  const db = getDb();
  // join products to get name/price/stock
  return await db.getAllAsync<CartItem>(`
    SELECT c.id, c.product_id, c.qty, p.name, p.price, p.stock
    FROM cart_items c
    JOIN products p ON c.product_id = p.product_id
  `);
};

export const addToCart = async (product_id: string) => {
  const db = getDb();
  // check stock
  const prod = await db.getFirstAsync<{ stock: number }>('SELECT stock FROM products WHERE product_id = ?', [product_id]);

  if (!prod) throw new Error('Sản phẩm không tồn tại');

  // check existing
  const existing = await db.getFirstAsync<{ id: number; qty: number }>('SELECT id, qty FROM cart_items WHERE product_id = ?', [product_id]);

  if (existing) {
    if (existing.qty + 1 > prod.stock) throw new Error('Vượt tồn kho');
    await db.runAsync('UPDATE cart_items SET qty = qty + 1 WHERE id = ?', [existing.id]);
  } else {
    await db.runAsync('INSERT INTO cart_items (product_id, qty) VALUES (?, ?)', [product_id, 1]);
  }
};

export const updateQty = async (id: number, qty: number) => {
  const db = getDb();
  if (qty <= 0) {
    await db.runAsync('DELETE FROM cart_items WHERE id = ?', [id]);
  } else {
    // check stock limit
    const row = await db.getFirstAsync<{ product_id: string }>('SELECT product_id FROM cart_items WHERE id = ?', [id]);
    if (!row) return;
    const prod = await db.getFirstAsync<{ stock: number }>('SELECT stock FROM products WHERE product_id = ?', [row.product_id]);
    if (prod && qty > prod.stock) throw new Error('Vượt tồn kho');
    await db.runAsync('UPDATE cart_items SET qty = ? WHERE id = ?', [qty, id]);
  }
};

export const clearCart = async () => {
  const db = getDb();
  await db.runAsync('DELETE FROM cart_items');
};
