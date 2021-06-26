import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Plant } from './screens/'

import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen name="Plant" component={Plant} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}