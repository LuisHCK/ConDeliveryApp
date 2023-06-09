import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import colors from '../assets/styles/colors'
import PageContainer from '../components/PageContainer'
import { AirbnbRating } from 'react-native-ratings'
import Button from '../components/Button'
import { invoiceFormat } from '../utils/format'

const OrderConfirmation = () => {
    const { params } = useRoute()
    const navigation = useNavigation()

    const goHome = () => navigation.navigate('Home')

    const goToOrderTracker = () =>
        navigation.navigate('OrderTracker', { orderId: params.orderId })

    useEffect(() => {
        const preventBack = (event) => {
            event.preventDefault()
            navigation.navigate('Home')
        }

        navigation.addListener('beforeRemove', preventBack)

        return () => {
            navigation.removeListener('beforeRemove', preventBack)
        }
    }, [])

    return (
        <PageContainer style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headTitle}>
                    ¡Tu pedido ha sido enviado!
                </Text>

                <Text style={styles.orderReference}>
                    Tu numero de pedido es:{' '}
                    <Text style={styles.orderNumber}>
                        {invoiceFormat(params?.orderId)}
                    </Text>
                </Text>

                <Image
                    source={require('src/assets/medal.png')}
                    style={styles.medalIcon}
                />

                <Text style={styles.ratingLabel}>
                    Cuéntanos como fue tu experecia
                </Text>

                <AirbnbRating
                    defaultRating={5}
                    reviews={[
                        'Terrible',
                        'Mala',
                        'Aceptable',
                        'Buena',
                        'Excelente'
                    ]}
                />
            </View>

            <View style={styles.buttonsContainer}>
                <Button
                    label="Volver al inicio"
                    variant="light"
                    onPress={goHome}
                />
                <Button label="Ver mi pedido" onPress={goToOrderTracker} />
            </View>
        </PageContainer>
    )
}

export default OrderConfirmation

const styles = StyleSheet.create({
    container: {
        paddingTop: 100
    },
    content: {
        alignItems: 'center',
        flex: 1
    },
    headTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.dark,
        textAlign: 'center',
        marginBottom: 20
    },
    ratingLabel: {
        fontSize: 16,
        marginTop: 64,
        color: colors.light
    },
    medalIcon: {
        width: 150,
        height: 150,
        resizeMode: 'cover'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        paddingVertical: 20
    },
    orderReference: {
        marginBottom: 64,
        color: colors.light
    },
    orderNumber: {
        fontWeight: '500',
        textDecorationLine: 'underline'
    }
})
