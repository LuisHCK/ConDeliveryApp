import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from 'src/screens/Welcome'
import Restaurant from 'src/screens/Restaurant'
import CartPage from '../../screens/Cart'

const Stack = createStackNavigator()

const MainNavigator = ({ tabs }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={tabs}
                options={{
                    headerShown: false,
                    title: 'Inicio',
                    headerTitle: 'Inicio'
                }}
            />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen
                name="Restaurant"
                component={Restaurant}
                options={{
                    title: ''
                }}
            />
            <Stack.Screen
                name="Cart"
                component={CartPage}
                options={{ title: 'Carrito', headerTitle: 'Carrito' }}
            />
        </Stack.Navigator>
    )
}

MainNavigator.propTypes = {
    tabs: PropTypes.any
}

export default MainNavigator
