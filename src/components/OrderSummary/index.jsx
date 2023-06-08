import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import { formatPrice } from '../../utils/format'
import colors, { transparentize } from '../../assets/styles/colors'

const OrderSummary = ({
    cartTotal,
    restaurant,
    orderGrandTotal,
    isFreeDelivery,
    canContinue,
    onContinue
}) => {
    return (
        <View style={styles.orderTotals}>
            <View style={styles.orderLineItem}>
                <Text style={styles.lineItemText}>Subtotal</Text>
                <Text style={styles.lineItemText}>
                    {formatPrice(cartTotal)}
                </Text>
            </View>
            <View style={styles.orderLineItem}>
                <Text style={styles.lineItemText}>Costo de envío</Text>
                <Text style={styles.lineItemText}>
                    {isFreeDelivery
                        ? 'Delivery gratis'
                        : formatPrice(restaurant?.deliveryTax)}
                </Text>
            </View>

            <View style={[styles.orderLineItem, styles.lineItemTotal]}>
                <Text style={[styles.lineItemText, styles.textTotal]}>
                    Total pedido
                </Text>
                <Text style={[styles.lineItemText, styles.textTotal]}>
                    {formatPrice(orderGrandTotal)}
                </Text>
            </View>

            <Button
                label="Continuar"
                style={styles.continueButton}
                onPress={onContinue}
                disabled={!canContinue}
            />
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    orderTotals: {
        borderTopColor: transparentize(colors.dark, 20),
        borderTopWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 32
    },
    orderLineItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    lineItemText: {
        fontSize: 14,
        color: colors.dark
    },
    lineItemTotal: {
        marginTop: 10
    },
    textTotal: {
        fontWeight: 'bold',
        fontSize: 18
    },
    continueButton: {
        marginTop: 10
    }
})
