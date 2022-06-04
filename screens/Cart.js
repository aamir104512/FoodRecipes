import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';
import CartComponent from '../components/CartComponent';

export default function Cart() {
  return (
    <View style={styles.container}>

      {/* Cart header */}
      <View style={styles.cartHeader}>
        <Text style={{color: Colors.white, fontSize: 24, fontWeight: 'bold'}}>
          My Cart
        </Text>
      </View>

      {/* Cart component displaying image, title and descrioption. we are passing data here to CartComponent */}
      <View style={{marginRight: 70, marginTop: 40}}>
        <CartComponent
          image={require('../images/machaOats.png')}
          title="Macha Oats"
          description="Blueberries and raspberries top these matcha oats for a quick breakfast."
        />

        <CartComponent
          image={require('../images/green.jpg')}
          title="Green Smoothie"
          description="Get your daily dose of dark leafy greens any time of day with this delicious green smoothie. "
        />

        <CartComponent
          image={require('../images/cinamon.jpg')}
          title="Cinnamon-Roll Oats"
          description="A grab-and-go breakfasts on hand which takes minutes to assemble. "
        />
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
  cartHeader: {},
});
