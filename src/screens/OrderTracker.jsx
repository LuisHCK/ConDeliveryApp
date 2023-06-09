import {
    Alert,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { GET_ORDER } from '../apollo/queries'
import { getFileUrl, sanitizeObject } from '../utils/strapi'
import Spinner from 'react-native-loading-spinner-overlay'
import colors from '../assets/styles/colors'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { invoiceFormat } from '../utils/format'
import OrderStatus from '../components/OrderStatus'
import Button from '../components/Button'
import SvgPhone from '../components/Icons/Phone'

const OrderTracker = () => {
    const { params } = useRoute()
    const { data, loading, refetch } = useQuery(GET_ORDER, {
        variables: { orderId: params.orderId }
    })
    const navigation = useNavigation()
    const order = sanitizeObject(data?.order?.data)

    const callToRestaurant = () => {
        if (order?.restaurant?.phone) {
            Linking.openURL(`tel:${order?.restaurant?.phone}`)
        } else {
            Alert.alert('El restaurante no tiene numero de telefono')
        }
    }

    console.log(order?.restaurant)

    useEffect(() => {
        const preventBack = (event) => {
            event.preventDefault()
            navigation.navigate('Orders')
        }

        navigation.addListener('beforeRemove', preventBack)

        return () => {
            navigation.removeListener('beforeRemove', preventBack)
        }
    }, [])

    return (
        <PageContainer>
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={styles.container}>
                    <Text style={styles.mainTitle}>Mi Pedido</Text>
                    <Text style={styles.orderNumber}>
                        #{invoiceFormat(params.orderId)}
                    </Text>

                    <Image
                        source={{
                            uri: getFileUrl(order?.restaurant?.photo?.url)
                        }}
                        style={styles.icon}
                    />
                    <Text style={styles.restaurantName}>
                        {order?.restaurant?.name}
                    </Text>

                    {order?.status && order.status !== 'cancelado' ? (
                        <OrderStatus currentStatus={order?.status} />
                    ) : (
                        <View style={styles.canceledOrder}>
                            <Text style={styles.canceledOrderText}>
                                Su pedido ha sido cancelado por el restaurante
                            </Text>
                        </View>
                    )}
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => refetch({ orderId: params.orderId })}
                        style={styles.updateOrderButton}
                    >
                        <Text style={styles.updateOrderText}>
                            {loading ? 'Actualizando...' : 'Actualizar'}
                        </Text>
                    </TouchableOpacity>
                    <Button
                        label={`Llamar a ${order?.restaurant?.name}`}
                        onPress={callToRestaurant}
                        icon={
                            <SvgPhone
                                width={22}
                                height={22}
                                stroke={colors.white}
                                style={styles.phoneIcon}
                            />
                        }
                    />
                </View>
            </SafeAreaView>

            <Spinner
                visible={loading}
                textContent={'Cargando pedido..'}
                textStyle={styles.spinnerTextStyle}
            />
        </PageContainer>
    )
}

export default OrderTracker

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 22,
        color: colors.dark,
        fontWeight: '500'
    },
    container: {
        alignItems: 'center'
    },
    orderNumber: {
        fontSize: 18,
        color: colors.light,
        fontWeight: '500',
        paddingTop: 8
    },
    icon: {
        width: 150,
        height: 150,
        marginTop: 32,
        marginBottom: 6,
        resizeMode: 'cover',
        borderRadius: 12
    },
    restaurantName: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.light,
        marginBottom: 16
    },
    phoneIcon: {
        marginRight: 6
    },
    canceledOrder: {
        backgroundColor: colors.error,
        padding: 24,
        borderRadius: 10
    },
    canceledOrderText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500'
    },
    updateOrderButton: {
        alignSelf: 'center',
        padding: 10,
        margin: 10
    },
    updateOrderText: {
        fontSize: 18,
        color: colors.secondary
    }
})
