import React from 'react'
import { Pressable, Text, View, Alert } from 'react-native'
import styles from './styles'
import TrashIcon from '../Icons/Trash'
import colors from '../../assets/styles/colors'

const QuantityInput = ({ quantity, onChange, onDelete, productName }) => {
    const confirmDelete = () => {
        Alert.alert(
            'Delete product from cart',
            `Are you sure you want to delete ${productName} from your cart?`,
            [
                {
                    text: 'No',
                    style: 'cancel'
                },
                { text: 'Yes', onPress: onDelete }
            ]
        )
    }

    const onDecrease = () => {
        if (quantity === 1) {
            return confirmDelete()
        }
        onChange(quantity - 1)
    }

    const onIncrease = () => {
        onChange(quantity + 1)
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => onDecrease()}>
                {quantity <= 1 ? (
                    <TrashIcon
                        style={{ color: colors.error }}
                        width={18}
                        height={18}
                    />
                ) : (
                    <Text style={styles.label}>-</Text>
                )}
            </Pressable>
            <Text style={[styles.label, styles.quantity]}>{quantity}</Text>
            <Pressable style={styles.button} onPress={() => onIncrease()}>
                <Text style={styles.label}>+</Text>
            </Pressable>
        </View>
    )
}

export default QuantityInput
