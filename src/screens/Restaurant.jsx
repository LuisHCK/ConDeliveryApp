import React, { Fragment, useContext, useEffect } from 'react'
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from '@apollo/client'

import PageContainer from 'src/components/PageContainer'
import StarIcon from 'src/components/Icons/Star'
import CategoriesList from 'src/components/RestaurantPage/CategoriesList'
import Menu from 'src/components/RestaurantPage/Menu'

import colors from 'src/assets/styles/colors'
import { RestaurantContext } from 'src/context/restaurant'
import { GET_RESTAURANT } from 'src/apollo/queries'
import { sanitizeObject } from 'src/utils/strapi'
import { getFileUrl } from 'src/utils/strapi'
import { CartFooter } from 'src/components/CartFooter'

const Restaurant = () => {
    const { params } = useRoute()
    const navigation = useNavigation()
    const { loading, data, refetch } = useQuery(GET_RESTAURANT, {
        variables: { restaurantId: params.id }
    })
    const { cartItems, clearCart } = useContext(RestaurantContext)
    const restaurant = sanitizeObject(data?.restaurant.data)

    const categories = restaurant?.categories?.map((c) => c.name)

    useEffect(() => {
        if (restaurant) {
            navigation.setOptions({
                title: restaurant.name
            })
        }
    }, [restaurant])

    useEffect(() => {
        const callback = (e) => {
            if (cartItems.length === 0) {
                return
            }

            e.preventDefault()
            // Prompt the user before leaving the screen
            Alert.alert(
                '¿Descartar los productos seleccionados?',
                'Has agregado productos a tu pedido. Si sales ahora se descartaran los productos que has seleccionado.',
                [
                    {
                        text: 'Permanecer en la pagina',
                        style: 'cancel',
                        onPress: () => {}
                    },
                    {
                        text: 'Descartar',
                        style: 'destructive',
                        // If the user confirmed, then we dispatch the action we blocked earlier
                        // This will continue the action that had triggered the removal of the screen
                        onPress: () => {
                            clearCart()
                            navigation.dispatch(e.data.action)
                        }
                    }
                ]
            )
        }
        navigation.addListener('beforeRemove', callback)

        return () => {
            navigation.removeListener('beforeRemove', callback)
        }
    }, [navigation, cartItems])

    return (
        <Fragment>
            <PageContainer>
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <Image
                                style={styles.cover}
                                source={{
                                    uri: getFileUrl(restaurant?.cover?.url)
                                }}
                            />
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.title}>{restaurant?.name}</Text>
                            <View style={styles.headerDetails}>
                                <StarIcon
                                    style={styles.star}
                                    height={14}
                                    width={14}
                                />
                                <Text style={styles.ratingText}>
                                    {restaurant?.rating}
                                </Text>
                                <Text style={styles.divider}>•</Text>
                                <CategoriesList categories={categories} />
                            </View>
                            <Text style={styles.menuText}>Menu</Text>
                            <View>
                                <Menu
                                    items={restaurant?.menu?.Item}
                                    refetch={refetch}
                                    loading={loading}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </PageContainer>
            {cartItems.length > 0 && (
                <SafeAreaView>
                    <CartFooter />
                </SafeAreaView>
            )}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: 192,
        borderRadius: 10
    },
    header: {
        paddingVertical: 16
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.dark
    },
    star: {
        color: colors.gold,
        marginRight: 5
    },
    headerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6
    },
    ratingText: {
        fontSize: 14
    },
    divider: {
        paddingHorizontal: 8,
        color: colors.light
    },
    menuText: {
        fontSize: 16,
        fontWeight: 600,
        marginTop: 20,
        marginBottom: 10
    }
})

export default Restaurant
