import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider } from '@apollo/client'
import TabsNavigator from './src/navigator/TabsNavigator'
import client from 'src/apollo/client'
import MainNavigator from './src/navigator/MainNavigator'
import { RestaurantProvider } from './src/context/restaurant'
import 'react-native-gesture-handler'

const App = () => {
    return (
        <RestaurantProvider>
            <NavigationContainer>
                <ApolloProvider client={client}>
                    <MainNavigator tabs={TabsNavigator} />
                </ApolloProvider>
            </NavigationContainer>
        </RestaurantProvider>
    )
}

export default App
