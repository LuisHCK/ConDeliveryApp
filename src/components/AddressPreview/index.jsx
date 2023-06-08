import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../assets/styles/colors'

const AddressPreview = ({ userAddress, toggleEdit }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, styles.mainLabel]}>
                Eviar a mi dirección:
            </Text>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>{userAddress.address}</Text>
                <Text style={styles.label}>{userAddress.name}</Text>
                <Text style={styles.label}>{userAddress.phone}</Text>
            </View>

            <TouchableOpacity style={styles.editAddress} onPress={toggleEdit}>
                <Text style={styles.editAddress}>Editar dirección</Text>
            </TouchableOpacity>
        </View>
    )
}

AddressPreview.propTypes = {
    userAddress: PropTypes.object,
    toggleEdit: PropTypes.func
}

export default AddressPreview

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        borderRadius: 20,
        padding: 24,
        alignItems: 'center'
    },
    addressContainer: {
        paddingLeft: 6,
        alignSelf: 'flex-start'
    },
    mainLabel: {
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    label: {
        color: colors.white,
        fontSize: 14,
        marginBottom: 6
    },
    address: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 6
    },
    editAddress: {
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white
    }
})
