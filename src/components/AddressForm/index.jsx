import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import colors from '../../assets/styles/colors'
import Button from '../Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddressForm = ({ data, onSubmit }) => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [addressForm, setAddressForm] = useState({
        name: '',
        address: '',
        phone: ''
    })

    const saveHanlder = async () => {
        if (addressForm.name && addressForm.address && addressForm.phone) {
            await AsyncStorage.setItem(
                'userAddress',
                JSON.stringify(addressForm),
                () => {}
            )
            onSubmit()
        } else {
            setErrorMessage(`Por favor rellena los todos los campos`)
        }
    }

    useEffect(() => {
        if (data) {
            setAddressForm(data)
        }
    }, [data])

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Datos de envío</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Nombre"
                placeholderTextColor={
                    !!errorMessage && !addressForm.name
                        ? colors.error
                        : colors.secondary
                }
                nativeID="name"
                value={addressForm.name}
                onChangeText={(name) =>
                    setAddressForm({ ...addressForm, name })
                }
                autoComplete="name"
                autoCapitalize="sentences"
            />
            <TextInput
                style={styles.textInput}
                placeholder="Dirección"
                placeholderTextColor={
                    !!errorMessage && !addressForm.address
                        ? colors.error
                        : colors.secondary
                }
                nativeID="address"
                value={addressForm.address}
                onChangeText={(address) =>
                    setAddressForm({ ...addressForm, address })
                }
                autoComplete="address-line1"
            />
            <TextInput
                style={styles.textInput}
                placeholder="Teléfono"
                placeholderTextColor={
                    !!errorMessage && !addressForm.phone
                        ? colors.error
                        : colors.secondary
                }
                nativeID="phone"
                value={addressForm.phone}
                onChangeText={(phone) =>
                    setAddressForm({ ...addressForm, phone })
                }
                autoComplete="tel"
                keyboardType="phone-pad"
            />
            {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            <Button
                label="Continue"
                variant="light"
                onPress={saveHanlder}
                style={styles.button}
            />
        </View>
    )
}

AddressForm.propTypes = {
    data: PropTypes.object,
    onSubmit: PropTypes.func
}

AddressForm.defaultProps = {
    onSubmit: () => {}
}

export default AddressForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        borderRadius: 20,
        padding: 24
    },
    label: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
        marginBottom: 10
    },
    pickerItem: {
        color: colors.white,
        marginBottom: 16
    },
    textInput: {
        backgroundColor: colors.extraLight,
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 18,
        marginBottom: 10
    },
    button: {
        marginTop: 10
    },
    error: {
        color: colors.lightError,
        fontWeight: '500',
        textAlign: 'center'
    }
})
