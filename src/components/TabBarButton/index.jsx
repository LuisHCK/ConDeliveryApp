import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from 'src/assets/styles/colors'

const TabBarButton = ({ label, onPress, icon }) => {
    const IconComponent = icon || React.Fragment

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <IconComponent stroke={colors.light} />
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center'
    },
    icon: {
        stroke: colors.light
    }
})

TabBarButton.propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    icon: PropTypes.any
}

export default TabBarButton
