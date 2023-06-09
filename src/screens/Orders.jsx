import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import PageContainer from 'src/components/PageContainer'
import { formatPrice } from '../utils/format'
import colors from '../assets/styles/colors'
import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import { useNavigation } from '@react-navigation/native'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const navigation = useNavigation()

    const readSavedOrders = async () => {
        const rawData = await AsyncStorage.getItem('orders')

        if (rawData) {
            setOrders(JSON.parse(rawData).reverse())
        }
    }

    const viewOrderStatus = (id) => {
        navigation.navigate('OrderTracker', { orderId: id })
    }

    useEffect(() => {
        readSavedOrders()
    }, [])

    return (
        <PageContainer>
            <FlatList
                data={orders}
                keyExtractor={(item) => `order-item-${item?.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.container}
                        onPress={() => viewOrderStatus(item.id)}
                    >
                        <Text style={styles.date}>
                            {format(
                                parseISO(item.date),
                                'd MMM yyyy hh:mm aaa',
                                {
                                    locale: es
                                }
                            )}
                        </Text>
                        <Text style={styles.name}>{item.restaurant?.name}</Text>
                        <Text style={styles.price}>
                            {formatPrice(item.total)}
                        </Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text>No hay resultados</Text>}
                onRefresh={readSavedOrders}
                refreshing={false}
            />
        </PageContainer>
    )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginBottom: 10,
        borderRadius: 10
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        color: colors.white
    },
    name: {
        fontSize: 14,
        marginBottom: 6,
        color: colors.white
    },
    price: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.white
    }
})
