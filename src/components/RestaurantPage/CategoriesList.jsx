import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/styles/colors'

const CategoriesList = ({ categories }) => {
    return categories?.map((c, index) => (
        <View style={{ flexDirection: 'row' }} key={`category-item-${c}`}>
            <Text style={styles.categoryItem}>{c}</Text>
            {index < categories.length - 1 && (
                <Text style={styles.divider}>•</Text>
            )}
        </View>
    ))
}

const styles = StyleSheet.create({
    divider: {
        paddingHorizontal: 8,
        color: colors.light
    },
    categoryItem: {
        color: colors.light,
        fontSize: 14
    }
})

CategoriesList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string)
}

CategoriesList.defaultProps = {
    categories: []
}

export default CategoriesList
