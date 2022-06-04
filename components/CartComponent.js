import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

export default function CartComponent({image, title, description}) {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="contain" style={styles.recipesImage} />
      <View>
        <Text style={{color: Colors.white, fontSize: 16, fontWeight: 'bold'}}>
          {title}
        </Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    padding: 10
  },
  recipesImage: {
    height: 75,
    width: 75,
    marginRight: 10,
    borderRadius: 10,
  },
});
