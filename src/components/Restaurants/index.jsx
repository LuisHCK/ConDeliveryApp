import React, { useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'
import RestaurantItem from 'src/components/RestaurantItem'
import { featuredRestaurants, restaurantsByCategory } from 'src/apollo/filters'
import { sanitizeObject } from 'src/utils/strapi'
import { GET_RESTAURANTS_LIST } from 'src/apollo/queries'
import { useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'

const Restaurants = ({ selectedCategory }) => {
    const { loading, data, refetch } = useQuery(GET_RESTAURANTS_LIST, {
        variables: featuredRestaurants
    })
    const navigation = useNavigation()

    const restaurants = sanitizeObject(data?.restaurants?.data)

    const handleClick = (id) => {
        navigation.navigate('Restaurant', { id })
    }

    useEffect(() => {
        if (selectedCategory !== 'all') {
            const filters = restaurantsByCategory([selectedCategory])
            refetch(filters)
        } else {
            refetch(featuredRestaurants)
        }
    }, [selectedCategory])

    return (
        <FlatList
            data={restaurants}
            keyExtractor={(item) => `restaurant-item-${item?.id}`}
            renderItem={({ item }) => (
                <RestaurantItem data={item} onPress={handleClick} />
            )}
            ListEmptyComponent={<Text>No hay resultados</Text>}
            onRefresh={refetch}
            refreshing={loading}
        />
    )
}

Restaurants.propTypes = {
    selectedCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Restaurants.defaultProps = {
    selectedCategory: 'all'
}

export default Restaurants
