import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import Details from '../screens/Details';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Colors from '../colors/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.secondary,
          bottom: 20,
          borderTopColor: Colors.secondary,
          marginHorizontal: 20,
          borderRadius: 20,
          position: 'absolute',
          height: 80,
          justifyContent: 'center',
          tabBarActiveTintColor: Colors.buttons,
          tabBarInactiveTintColor: Colors.white,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../images/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? Colors.buttons : Colors.white,
                  }}
                />
              </View>
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../images/search.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? Colors.buttons : Colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../images/cart.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? Colors.buttons : Colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../images/user.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? Colors.buttons : Colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#696969',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});
