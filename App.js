import { View, Text } from 'react-native'
import React from 'react'
import BottomTabs from './Navigation/BottomTabs'
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    
  )
}