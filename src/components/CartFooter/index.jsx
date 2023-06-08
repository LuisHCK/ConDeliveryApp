import React, { useContext } from 'react'
import { RestaurantContext } from '../../context/restaurant'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../assets/styles/colors'
import { formatPrice } from '../../utils/format'
import { useNavigation } from '@react-navigation/native'

export const CartFooter = ({ restaurantId }) => {
    const { cartItems, cartTotal } = useContext(RestaurantContext)
    const navigation = useNavigation()

    const goToCart = () => {
        navigation.navigate('Cart', { restaurantId })
    }

    return (
        <View style={styles.container}>
            <View style={styles.counter}>
                <Text style={styles.quantity}>{cartItems.length}</Text>
                <Text style={styles.items}>Platillos</Text>
            </View>

            <View style={styles.viewCart}>
                <TouchableOpacity style={styles.button} onPress={goToCart}>
                    <Text style={styles.viewCartText}>Ver carrito</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.total}>{formatPrice(cartTotal)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.primary,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 18,
        flexDirection: 'row'
    },
    counter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        color: colors.white,
        marginHorizontal: 4
    },
    quantity: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    totalContainer: {
        borderRadius: 18,
        paddingHorizontal: 8,
        paddingVertical: 12,
        backgroundColor: colors.secondary,
        // Shadow
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    total: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 'bold'
    },
    viewCart: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    viewCartText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '500'
    },
    button: {
        padding: 22
    }
})
