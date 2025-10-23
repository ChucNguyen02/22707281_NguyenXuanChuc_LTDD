import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { getCartItems, clearCart } from '../src/db/cart.repo';
import { getDb } from '../src/db/db';
import { CartItem } from '../src/models/types';
import Toast from 'react-native-toast-message';
import { formatCurrency } from '../src/utils/format';

export default function Invoice() {
    const [items, setItems] = useState<CartItem[]>([]);
    const router = useRouter();

    const load = async () => setItems(await getCartItems());

    useEffect(() => {
        load();
    }, []);

    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const vat = subtotal * 0.1;
    const total = subtotal + vat;

    const handleCheckout = async () => {
        if (items.length === 0) {
            Toast.show({ type: 'info', text1: 'Giỏ hàng trống!', position: 'bottom' });
            return;
        }

        Alert.alert(
            'Xác nhận thanh toán',
            `Tổng tiền: ${formatCurrency(total)}\nBạn có chắc muốn thanh toán?`,
            [
                { text: 'Huỷ', style: 'cancel' },
                {
                    text: 'Thanh toán',
                    onPress: async () => {
                        const db = getDb();
                        try {
                            // Trừ tồn kho
                            for (const item of items) {
                                await db.runAsync(
                                    'UPDATE products SET stock = stock - ? WHERE product_id = ?',
                                    [item.qty, item.product_id]
                                );
                            }

                            // Xóa giỏ hàng
                            await clearCart();

                            // Thông báo thành công
                            Toast.show({
                                type: 'success',
                                text1: 'Thanh toán thành công ✅',
                                text2: `Tổng tiền: ${formatCurrency(total)}`,
                                position: 'bottom',
                                visibilityTime: 3000,
                            });

                            // Quay về trang chủ
                            setTimeout(() => {
                                router.replace('/');
                            }, 1000);
                        } catch (error) {
                            Alert.alert('Lỗi', (error as Error).message);
                        }
                    },
                },
            ]
        );
    };

    if (items.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyIcon}>📋</Text>
                <Text style={styles.emptyText}>Chưa có sản phẩm nào</Text>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Text style={styles.backButtonText}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>HÓA ĐƠN THANH TOÁN</Text>
                <Text style={styles.headerDate}>
                    {new Date().toLocaleDateString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </Text>
            </View>

            <FlatList
                data={items}
                keyExtractor={(i) => i.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.invoiceItem}>
                        <View style={styles.itemLeft}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemQty}>Số lượng: {item.qty}</Text>
                            <Text style={styles.itemPrice}>{formatCurrency(item.price)} / sp</Text>
                        </View>
                        <Text style={styles.itemTotal}>
                            {formatCurrency(item.price * item.qty)}
                        </Text>
                    </View>
                )}
            />

            <View style={styles.summary}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Tạm tính:</Text>
                    <Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>VAT (10%):</Text>
                    <Text style={styles.summaryValue}>{formatCurrency(vat)}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Tổng cộng:</Text>
                    <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.payButton}
                onPress={handleCheckout}
                activeOpacity={0.8}
            >
                <Text style={styles.payButtonText}>💳 Thanh toán</Text>
            </TouchableOpacity>
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
    backButton: {
        backgroundColor: '#2563eb',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    headerDate: {
        fontSize: 14,
        color: '#666',
    },
    listContent: {
        padding: 16,
    },
    invoiceItem: {
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
    itemLeft: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    itemQty: {
        fontSize: 13,
        color: '#666',
        marginBottom: 2,
    },
    itemPrice: {
        fontSize: 13,
        color: '#999',
    },
    itemTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2563eb',
        marginLeft: 12,
    },
    summary: {
        backgroundColor: '#fff',
        margin: 16,
        marginTop: 0,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 15,
        color: '#666',
    },
    summaryValue: {
        fontSize: 15,
        fontWeight: '500',
        color: '#333',
    },
    divider: {
        height: 1,
        backgroundColor: '#e5e5e5',
        marginVertical: 12,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#16a34a',
    },
    payButton: {
        backgroundColor: '#16a34a',
        marginHorizontal: 16,
        marginBottom: 16,
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});