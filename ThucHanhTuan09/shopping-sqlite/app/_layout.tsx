import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { initDb } from '../src/db/db';
import Toast from 'react-native-toast-message';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Layout() {
    const [isDbReady, setIsDbReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                await initDb();
                setIsDbReady(true);
            } catch (error) {
                console.error('❌ Lỗi khởi tạo DB:', error);
                Toast.show({
                    type: 'error',
                    text1: 'Không thể khởi tạo database',
                    position: 'bottom',
                });
            }
        };
        init();
    }, []);

    // ✅ Hiển thị loading trong khi đợi DB init
    if (!isDbReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={{ marginTop: 10 }}>Đang khởi tạo database...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Sản phẩm' }} />
                <Stack.Screen name="cart" options={{ title: 'Giỏ hàng' }} />
                <Stack.Screen name="invoice" options={{ title: 'Hóa đơn' }} />
            </Stack>
            <Toast />
        </View>
    );
}