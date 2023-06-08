import React, { useMemo, useState } from 'react'
import './jsdoc'

/**
 * @type { InitialState }
 */
const initialState = {
    cartItems: []
}

export const RestaurantContext = React.createContext(initialState)

export const RestaurantProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialState.cartItems)

    /**
     * Add or update item
     * @param {CartItem} cartItem
     */
    const addCartItem = (cartItem) => {
        setCartItems([...cartItems, cartItem])
    }

    /**
     * Remove item from cart
     * @param {Number} id
     */
    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const setQuantity = (item) => {
        setCartItems((prev) =>
            prev.map((i) => {
                if (i.id === item.id) {
                    return { ...i, quantity: item.quantity }
                }
                return i
            })
        )
    }

    const cartTotal = useMemo(
        () =>
            cartItems.reduce((prev, item) => {
                return prev + item.quantity * item.price
            }, 0),
        [cartItems]
    )

    return (
        <RestaurantContext.Provider
            value={{
                cartItems,
                addCartItem,
                removeItem,
                clearCart,
                setQuantity,
                cartTotal
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}
