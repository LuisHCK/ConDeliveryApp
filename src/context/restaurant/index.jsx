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
    const updateCartItem = (cartItem) => {
        setCartItems((prev) => {
            if (prev.find((item) => item.id === cartItem.id)) {
                return prev.map((item) => {
                    if (item.id === cartItem.id) {
                        return cartItem
                    } else {
                        item
                    }
                })
            }
            return [...prev, cartItem]
        })
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

    const cartTotal = useMemo(
        () =>
            cartItems.reduce((prev, item) => {
                return prev + (item.quantity * item.price)
            }, 0),
        [cartItems]
    )

    return (
        <RestaurantContext.Provider
            value={{
                cartItems,
                updateCartItem,
                removeItem,
                clearCart,
                cartTotal
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}
