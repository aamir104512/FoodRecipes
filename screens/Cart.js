import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        <Text style={{color: Colors.white, fontSize: 24, fontWeight: 'bold'}}>
          My Cart
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161516',
    padding: 20,
  },
  cartHeader: {
    marginTop: 30,
  },
});
