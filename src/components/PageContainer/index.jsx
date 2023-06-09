import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from 'src/assets/styles/colors'

const PageContainer = ({ children, style }) => {
    return <View style={[styles, style]}>{children}</View>
}

const styles = StyleSheet.create({
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.white,
    flex: 1,
})

export default PageContainer
