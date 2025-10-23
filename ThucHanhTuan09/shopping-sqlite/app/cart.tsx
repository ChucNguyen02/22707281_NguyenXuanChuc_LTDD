import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { getCartItems, updateQty } from '../src/db/cart.repo';
import { CartItem } from '../src/models/types';
import Toast from 'react-native-toast-message';
import { formatCurrency } from '../src/utils/format';

export default function Cart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const load = async () => setCart(await getCartItems());

    const changeQty = async (id: number, newQty: number) => {
        try {
            await updateQty(id, newQty);
            Toast.show({
                type: 'info',
                text1: newQty <= 0 ? 'Đã xoá sản phẩm ❌' : 'Cập nhật số lượng 🛍️',
                position: 'bottom',
            });
            load();
        } catch (err: any) {
            Toast.show({
                type: 'error',
                text1: err.message,
                position: 'bottom',
            });
        }
    };

    useEffect(() => { load(); }, []);

    const total = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

    if (cart.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyIcon}>🛒</Text>
                <Text style={styles.emptyText}>Giỏ hàng trống</Text>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.shopButton}>
                        <Text style={styles.shopButtonText}>Tiếp tục mua sắm</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>{formatCurrency(item.price)}</Text>
                        </View>

                        <View style={styles.qtyContainer}>
                            <TouchableOpacity
                                style={styles.qtyButton}
                                onPress={() => changeQty(item.id, item.qty - 1)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.qtyButtonText}>−</Text>
                            </TouchableOpacity>

                            <View style={styles.qtyDisplay}>
                                <Text style={styles.qtyText}>{item.qty}</Text>
                            </View>

                            <TouchableOpacity
                                style={styles.qtyButton}
                                onPress={() => changeQty(item.id, item.qty + 1)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.qtyButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.itemTotal}>
                            {formatCurrency(item.qty * item.price)}
                        </Text>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Tạm tính:</Text>
                    <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
                </View>

                <Link href="/invoice" asChild>
                    <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.8}>
                        <Text style={styles.checkoutButtonText}>🧾 Xem hoá đơn</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    emptyIcon: {
        fontSize: 80,
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 18,
        color: '#666',
        marginBottom: 24,
    },
    shopButton: {
        backgroundColor: '#2563eb',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    shopButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    listContent: {
        padding: 16,
        paddingBottom: 140,
    },
    cartItem: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemInfo: {
        marginBottom: 12,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 14,
        color: '#666',
    },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    qtyButton: {
        backgroundColor: '#2563eb',
        width: 36,
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qtyButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    qtyDisplay: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 12,
        borderRadius: 6,
    },
    qtyText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    itemTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2563eb',
        textAlign: 'right',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 16,
        color: '#666',
    },
    totalValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    checkoutButton: {
        backgroundColor: '#16a34a',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});