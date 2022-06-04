import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View>
          <Text style={{color: Colors.white, fontSize: 24, fontWeight: 'bold'}}>Muhammad Aamir</Text>
          <Text style={{fontSize: 16}}>@aamir008</Text>
        </View>
        <View>
          <Image
            source={require('../images/profile.jpg')}
            resizeMode="contain"
            style={{height: 60, width: 60, borderRadius: 40}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    padding: 20
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
