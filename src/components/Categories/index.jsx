import React from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Category from './Category'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../../apollo/queries'
import { sanitizeObject } from '../../utils/strapi'

const Categories = ({ onSelect, selectedCategory }) => {
    const { loading, data: categoriesResponse } = useQuery(GET_CATEGORIES)

    const allCategories = {
        id: 'all',
        name: 'Popular',
        icon: {
            url: '/uploads/all_6c1e41a352.png'
        }
    }

    const categoriesList = sanitizeObject(
        categoriesResponse?.categories.data || []
    )

    const handleCategorySelect = (id) => {
        onSelect?.(id)
    }

    return loading ? (
        <ActivityIndicator size="large" />
    ) : (
        <FlatList
            data={[allCategories, ...categoriesList]}
            keyExtractor={(item) => `category-item-${item.id}`}
            horizontal
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon.url}
                    isActive={item.id === selectedCategory}
                    onPress={() => handleCategorySelect(item.id)}
                />
            )}
            ItemSeparatorComponent={<View style={{ width: 24 }} />}
        />
    )
}

Categories.propTypes = {
    onSelect: PropTypes.func,
    selectedCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Categories.defaultProps = {
    onSelect: () => null,
    selectedCategory: 'all'
}

export default Categories
