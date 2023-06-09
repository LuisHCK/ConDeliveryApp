import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { getFileUrl } from '../../utils/strapi'
import QuantityInput from '../QuantityInput'
import { formatPrice } from '../../utils/format'
import colors from '../../assets/styles/colors'

const OrderItem = ({ item, onChange, onDelete }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: getFileUrl(item.photo) }}
                style={styles.photo}
            />
            <View style={styles.details}>
                <Text style={styles.itemName}>{item.name}</Text>

                <QuantityInput
                    quantity={item.quantity}
                    onChange={onChange}
                    onDelete={onDelete}
                    productName={item.name}
                />
            </View>
            <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
        </View>
    )
}

OrderItem.propTypes = {
    item: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    itemName: {
        fontSize: 18,
        fontWeight: '500'
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    details: {
        paddingStart: 10,
        flex: 1
    },
    itemPrice: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16
    }
})
