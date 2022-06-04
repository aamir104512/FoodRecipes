import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Details from '../screens/Details';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Bottom' component={BottomTabs}/>
        <Stack.Screen name='Recipe Details' component={Details}/>
    </Stack.Navigator>
  )
}