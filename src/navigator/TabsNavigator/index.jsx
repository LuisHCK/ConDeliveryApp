import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import TabBar from './TabBar'
import Icons from 'src/components/Icons'

import Home from 'src/screens/Home'
import Search from 'src/screens/Search'
import Orders from 'src/screens/Orders'
import Profile from 'src/screens/Profile'
import colors from 'src/assets/styles/colors'

const Tab = createBottomTabNavigator()
const commonOptions = {
    headerShadowVisible: false,
    headerStyle: {
        backgroundColor: colors.white
    }
}

const Navigator = () => {
    return (
        <Tab.Navigator
            style={styles.container}
            tabBar={(props) => <TabBar {...props} />}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Inicio',
                    title: 'Inicio',
                    icon: Icons.Home,
                    ...commonOptions
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Buscar',
                    title: 'Buscar',
                    icon: Icons.Search,
                    ...commonOptions
                }}
            />
            <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                    tabBarLabel: 'Pedidos',
                    title: 'Pedidos',
                    icon: Icons.Motorbike,
                    ...commonOptions
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    title: 'Perfil',
                    icon: Icons.User,
                    ...commonOptions
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    }
})

export default Navigator
