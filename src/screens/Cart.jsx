import React, { useContext, useEffect, useMemo, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PageContainer from '../components/PageContainer'
import AddressForm from '../components/AddressForm'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AddressPreview from '../components/AddressPreview'
import OrderItem from '../components/OrderItem'
import { RestaurantContext } from '../context/restaurant'
import { useRoute } from '@react-navigation/native'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_ORDER, GET_RESTAURANT } from '../apollo/queries'
import { sanitizeObject } from '../utils/strapi'
import OrderSummary from '../components/OrderSummary'
import Spinner from 'react-native-loading-spinner-overlay'
import colors from '../assets/styles/colors'

export default function CartPage() {
    const { cartItems, setQuantity, removeItem, cartTotal } =
        useContext(RestaurantContext)
    const [userAddress, setUserAddress] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const [restaurant, setRestaurant] = useState({})
    const { params } = useRoute()
    const { data: rawData } = useQuery(GET_RESTAURANT, {
        variables: { restaurantId: params.restaurantId }
    })
    const [createOrder, { data: orderData, loading: loadingOrder }] =
        useMutation(CREATE_ORDER)

    const getItem = async () => {
        const value = await AsyncStorage.getItem('userAddress')

        if (value) {
            setUserAddress(JSON.parse(value))
        }
    }

    const submitHandler = () => {
        getItem()
        setShowEdit(false)
    }

    const quantityHandler = (item) => {
        setQuantity(item)
    }

    const onDeleteHandler = (item) => {
        removeItem(item.id)
    }

    const prepareOrder = () => {
        const payload = {
            total: orderGrandTotal,
            orderItems: cartItems.map((i) => ({
                id: i.id,
                name: i.name,
                quantity: i.quantity,
                price: i.price,
                item_id: i.id
            })),
            userAddress
        }
        createOrder({ variables: { data: payload } })
    }

    const completeOrder = ()=> {
        
    }

    /**
     * Calculate order grand total
     * @type Number
     */
    const orderGrandTotal = useMemo(() => {
        if (restaurant.taxFreeMinTotal) {
            return cartTotal
        } else {
            return cartTotal + (restaurant.deliveryTax || 0)
        }
    }, [restaurant, cartTotal])

    const isFreeDelivery = useMemo(() => {
        return (
            !!restaurant.taxFreeMinTotal &&
            orderGrandTotal >= restaurant.taxFreeMinTotal
        )
    }, [restaurant, cartTotal])

    useEffect(() => {
        getItem()
    }, [])

    useEffect(() => {
        if (rawData) {
            setRestaurant(sanitizeObject(rawData?.restaurant.data))
        }
    }, [rawData])

    useEffect(() => {
        if (!loadingOrder && orderData) {
            console.log(sanitizeObject(orderData.createOrder.data))
        }
    }, [orderData, loadingOrder])

    return (
        <PageContainer>
            {!!userAddress && !showEdit ? (
                <AddressPreview
                    userAddress={userAddress}
                    toggleEdit={() => setShowEdit(!showEdit)}
                />
            ) : (
                <AddressForm data={userAddress} onSubmit={submitHandler} />
            )}

            <View style={styles.itemsContainer}>
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => `cart-item-${item?.id}`}
                    renderItem={({ item }) => (
                        <OrderItem
                            item={item}
                            onChange={(quantity) =>
                                quantityHandler({ ...item, quantity })
                            }
                            onDelete={() => onDeleteHandler(item)}
                        />
                    )}
                    ListEmptyComponent={<Text>Su pedido está vacío</Text>}
                />
            </View>

            <OrderSummary
                cartTotal={cartTotal}
                restaurant={restaurant}
                orderGrandTotal={orderGrandTotal}
                isFreeDelivery={isFreeDelivery}
                onContinue={prepareOrder}
                canContinue={
                    cartItems.length && userAddress && orderGrandTotal > 0
                }
            />

            <Spinner
                visible={loadingOrder}
                textContent={'Estamos procesanto tu pedido...'}
                textStyle={styles.spinnerTextStyle}
            />
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    itemsContainer: {
        marginTop: 32,
        flex: 1
    },
    spinnerTextStyle: {
        color: colors.extraLight
    }
})
