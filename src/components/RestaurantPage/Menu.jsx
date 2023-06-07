import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import MenuItem from './MenuItem'
import { RestaurantContext } from 'src/context/restaurant'

const Menu = ({ items }) => {
    const { cartItems, updateCartItem, removeItem } =
        useContext(RestaurantContext)

    return (
        <View>
            {items?.map((item) => (
                <MenuItem
                    key={`menu-item-${item.id}`}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    photo={item.photo?.data?.attributes?.url}
                    price={item.price}
                    category={item.category}
                    isAdded={
                        cartItems.findIndex((i) => i.id === item.id) !== -1
                    }
                    onSelect={updateCartItem}
                    onRemove={removeItem}
                />
            ))}
        </View>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string,
            description: PropTypes.string,
            photo: PropTypes.shape({ url: PropTypes.string }),
            price: PropTypes.number,
            category: PropTypes.string
        })
    ),
    refetch: PropTypes.func,
    loading: PropTypes.bool
}

Menu.defaultProps = {
    refetch: () => null,
    loading: false
}

export default Menu
