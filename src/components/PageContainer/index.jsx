import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from 'src/assets/styles/colors'

const PageContainer = ({ children }) => {
    return <View style={styles}>{children}</View>
}

const styles = StyleSheet.create({
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.white,
    flex: 1,
})

export default PageContainer
