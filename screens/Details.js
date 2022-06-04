import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

export default function Details({route}) {
  const {recipeData} = route.params;
  return (
    <View style={styles.container}>
      {/* Header buttons (back button and favourtite button) */}

      <View style={styles.menu}>
        <TouchableOpacity style={styles.secondView}>
          <Image
            source={require('../images/back.png')}
            style={[styles.menuImage, {tintColor: Colors.white}]}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondView}>
          <Image
            source={require('../images/heart.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>
      </View>

      {/* Recipe image come here */}

      <View style={styles.recipeImageView}>
        <Image
          source={recipeData.image}
          resizeMode="contain"
          style={{width: 250, height: 250, borderRadius: 10}}
        />
      </View>

      {/* Recipe title, details and ingredients card */}
      <View style={{alignItems: 'center', marginTop: 30}}>
        <View style={styles.details}>
          <Text style={{color: Colors.white, fontSize: 28, fontWeight: 'bold'}}>
            {recipeData.title}
          </Text>
          <Text>{recipeData.description}</Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Ingredients
          </Text>
          <Text>{recipeData.ingredients}</Text>

          <View style={styles.cartView}>
            <TouchableOpacity style={styles.cart}>
              <Text style={{color: 'white'}}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    padding: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuImage: {
    height: 25,
    width: 25,
  },
  secondView: {
    height: 45,
    width: 45,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  recipeImageView: {
    marginTop: 20,
    alignItems: 'center',
  },
  details: {
    height: 450,
    width: '98%',
    backgroundColor: Colors.ingredientsCard,
    borderRadius: 20,
    padding: 20,
  },
  cart: {
    width: 250,
    height: 50,
    backgroundColor: Colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cartView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
});
