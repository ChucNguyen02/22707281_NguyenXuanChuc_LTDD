import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { getAllProducts } from '../src/db/product.repo';
import { addToCart } from '../src/db/cart.repo';
import { Product } from '../src/models/types';
import Toast from 'react-native-toast-message';
import { formatCurrency } from '../src/utils/format';

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const load = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (err: any) {
            console.error('❌ Lỗi khi tải sản phẩm:', err);
            Toast.show({
                type: 'error',
                text1: 'Không thể tải sản phẩm',
                position: 'bottom',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (id: string) => {
        try {
            await addToCart(id);
            Toast.show({
                type: 'success',
                text1: 'Đã thêm vào giỏ hàng 🛒',
                position: 'bottom',
            });
        } catch (e: any) {
            Toast.show({
                type: 'error',
                text1: e.message,
                position: 'bottom',
            });
        }
    };

    useEffect(() => {
        load();
    }, []);

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.loadingText}>Đang tải sản phẩm...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.product_id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
                            <View style={styles.stockBadge}>
                                <Text style={styles.stockText}>Còn {item.stock} sản phẩm</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleAdd(item.product_id)}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.addButtonText}>+ Thêm</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Link href="/cart" asChild>
                <TouchableOpacity style={styles.cartButton} activeOpacity={0.8}>
                    <Text style={styles.cartButtonText}>🛒 Xem giỏ hàng</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        fontSize: 16,
        color: '#666',
    },
    listContent: {
        padding: 16,
        paddingBottom: 100,
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: 6,
    },
    stockBadge: {
        backgroundColor: '#f0fdf4',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
    stockText: {
        fontSize: 12,
        color: '#16a34a',
        fontWeight: '500',
    },
    addButton: {
        backgroundColor: '#2563eb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginLeft: 12,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    cartButton: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
        backgroundColor: '#16a34a',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    cartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});