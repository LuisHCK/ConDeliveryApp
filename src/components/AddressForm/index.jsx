import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/styles/colors'
import { Picker } from '@react-native-picker/picker'
import neighborhoods from '../../utils/neighborhoods'

const AddressForm = () => {
    const [neighborhood, setNeighborhood] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Barrio</Text>
            <Picker
                selectedValue={neighborhood}
                onValueChange={(itemValue) => setNeighborhood(itemValue)}
                itemStyle={styles.pickerItem}
            >
                {neighborhoods.map((n) => (
                    <Picker.Item key={n} label={n} value={n} />
                ))}
            </Picker>
            <TextInput style={styles.textInput} placeholder='Dirección' placeholderTextColor={colors.secondary} />
        </View>
    )
}

export default AddressForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 24
    },
    label: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14
    },
    pickerItem: {
        color: colors.white,
        marginBottom: 16
    },
    textInput: {
        backgroundColor: colors.extraLight,
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 18
    }
})
