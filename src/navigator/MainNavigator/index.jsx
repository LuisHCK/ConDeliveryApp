import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from 'src/screens/Welcome'
import Restaurant from 'src/screens/Restaurant'
import CartPage from '../../screens/Cart'
import OrderConfirmation from '../../screens/OrderConfirmation'
import OrderTracker from '../../screens/OrderTracker'

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
            <Stack.Screen
                name="OrderConfirmation"
                component={OrderConfirmation}
                options={{
                    title: 'Pedido enviado',
                    headerTitle: 'Pedido enviado',
                    headerBackTitleVisible: false,
                    headerLeft: () => null,
                    header: () => null
                }}
            />
            <Stack.Screen
                name="OrderTracker"
                component={OrderTracker}
                options={{
                    title: 'Seguimiento de pedido',
                    headerTitle: 'Seguimiento de pedido',
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}

MainNavigator.propTypes = {
    tabs: PropTypes.any
}

export default MainNavigator
