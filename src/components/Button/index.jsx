import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import colors from '../../assets/styles/colors'

const Button = ({ label, variant, onPress, style, disabled, icon }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                styles[variant],
                style,
                disabled && styles.disabled
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {icon}
            <Text style={[styles.label, styles[variant]]}>{label}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'light']),
    onPress: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    label: '',
    variant: 'primary',
    onPress: () => {},
    disabled: false
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        // Shadow
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
        flexDirection: 'row'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    primary: {
        backgroundColor: colors.primary,
        color: colors.white
    },
    secondary: {
        backgroundColor: colors.secondary,
        color: colors.white
    },
    light: {
        backgroundColor: colors.extraLight,
        color: colors.primary
    },
    disabled: {
        opacity: 0.8
    }
})
