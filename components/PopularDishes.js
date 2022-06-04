import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../colors/Colors'
import {useNavigation} from '@react-navigation/native'

export default function PopularDishes({data}) {

  return (
    <View style={styles.container}>
        {/* Image and Popular Dishes title view */}
        <View style={styles.innerView}>
            <Image source={data.image} resizeMode= "stretch" style={styles.imageStyle}/>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{data.title}</Text>
        </View>

        {/* show details button */}

        <TouchableOpacity style={styles.button} >
            <Image source={require('../images/right-arrow.png')} resizeMode="contain" style={{height: 20, width: 20, tintColor: Colors.white}}/>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 300,
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        height: 100, 
        width: 140, 
        borderRadius: 20, 
        marginRight: 8
    },
    button: {
        justifyContent: 'center', 
        paddingRight: 5, 
        height: 100, 
        width: 30, 
        backgroundColor: Colors.buttons, 
        borderTopRightRadius: 20, 
        borderBottomRightRadius: 20,
        alignItems: 'center'
    }
})