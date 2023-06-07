import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, View } from 'react-native'

import PageContainer from 'src/components/PageContainer'
import Categories from 'src/components/Categories'
import Restaurants from 'src/components/Restaurants'
import client from 'src/apollo/client'
import colors from 'src/assets/styles/colors'
import { GET_CATEGORIES } from 'src/apollo/queries'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const categoriesCache = client.readQuery({ query: GET_CATEGORIES })

    const renderRestaurantLabel = () => {
        if (selectedCategory === 'all') {
            return 'Restaurantes Populares'
        } else {
            if (categoriesCache?.categories) {
                const currentCategory = categoriesCache.categories?.data.find(
                    ({ id }) => id === selectedCategory
                )
                return currentCategory?.attributes.name
            }
            return 'Todos'
        }
    }

    return (
        <PageContainer>
            <SafeAreaView style={styles.restaurantList}>
                <Text style={styles.categoriesLabel}>Categorías</Text>

                <View>
                    <Categories
                        onSelect={setSelectedCategory}
                        selectedCategory={selectedCategory}
                    />
                </View>

                <Text style={styles.popularLabel}>
                    {renderRestaurantLabel()}
                </Text>
                <View style={{flex: 1}}>
                    <Restaurants selectedCategory={selectedCategory} />
                </View>
            </SafeAreaView>
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    categoriesLabel: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
        color: colors.dark
    },
    popularLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.dark,
        marginTop: 20,
        marginBottom: 20
    },
    restaurantList: {
        flex: 1
    }
})

export default Home
