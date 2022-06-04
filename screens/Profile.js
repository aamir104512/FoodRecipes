import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* This is header view containing name, usename and use image */}
      <View style={styles.headerView}>
        <View>
          <Text style={{color: Colors.white, fontSize: 24, fontWeight: 'bold'}}>
            Muhammad Aamir
          </Text>
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

      {/* Personal information view */}
      <View style={styles.parent}>
        <View style={styles.information}>
          {/* email image view */}
          <View>
            <Image
              source={require('../images/email.png')}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          {/*email text view */}
          <View>
            <Text
              style={{color: Colors.white, fontWeight: 'bold', fontSize: 16}}>
              Email
            </Text>
            <Text>aamir@gmail.com</Text>
          </View>
        </View>

        <View style={styles.information}>
          {/*phone image view */}
          <View>
            <Image
              source={require('../images/phone.png')}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          {/*phone text view */}
          <View>
            <Text
              style={{color: Colors.white, fontWeight: 'bold', fontSize: 16}}>
              Phone Number
            </Text>
            <Text>123456789</Text>
          </View>
        </View>

        <View style={styles.information}>
          {/*website image view */}
          <View>
            <Image
              source={require('../images/website.png')}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          {/*website text view */}
          <View>
            <Text
              style={{color: Colors.white, fontWeight: 'bold', fontSize: 16}}>
              Website
            </Text>
            <Text>https://github.com/aamir104512</Text>
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
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
    tintColor: Colors.buttons,
  },
  parent: {
    marginTop: 30,
    height: '60%',
    width: '100%',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
