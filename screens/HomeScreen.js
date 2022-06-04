import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../colors/Colors';
import Carousel from 'react-native-snap-carousel';


export default function HomeScreen() {
 
  return (
    <View style={styles.container}>
      {/* View for burger menu and user icon */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.secondView}>
          <Image
            source={require('../images/burger.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondView}>
          <Image
            source={require('../images/user.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>
      </View>

      {/* header and subheader text */}

      

      
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
  headerView: {
    marginTop: 30,
  },
  dishesHeader: {
    marginTop: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
