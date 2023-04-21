import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'

const StackNavigator = () => {
    const Stack = createStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})