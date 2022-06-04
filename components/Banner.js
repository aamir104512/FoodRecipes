import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../colors/Colors';
import {useNavigation} from '@react-navigation/native'

export default function Banner({data}) {
  const navigation = useNavigation();
  const [cart, setCart] = useState('Add to Cart')
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Recipe Details', {recipeData: data})}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Image
          source={data.image}
          style={{
            height: 150,
            width: 150,
            borderRadius: 10,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View>
        <Text style={styles.Title}>{data.title}</Text>
      </View>
      <Text style={styles.Description}>{data.description}</Text>

      <View style={styles.cartView}>
        <TouchableOpacity style={styles.cart} onPress= {() => setCart('Added to Cart') }>
          <Text style={{color: 'white'}}>{cart}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 220,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginTop: 20,
  },
  Title: {
    color: Colors.white,
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginTop: 5,
  },
  Description: {
    color: '#EDEADE',
    paddingHorizontal: 10,
  },
  cart: {
    width: 130,
    height: 40,
    backgroundColor: Colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cartView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
