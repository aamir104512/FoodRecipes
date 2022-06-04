import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <Text style={{color: Colors.white, fontSize: 24, fontWeight: 'bold'}}>
          Search Recipes
        </Text>
      </View>
      <View style={styles.searchInputView}>
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>
      <Text style={{marginTop: 30, fontSize: 20, fontWeight: 'bold'}}>
        Search History
      </Text>
      <View style={styles.historyContainer}>
        <Text style={{paddingLeft: 5, paddingTop: 5}}>Cherry Smoothie</Text>
        <Text style={{paddingLeft: 5, paddingTop: 5}}>Zinger Burger</Text>
        <Text style={{paddingLeft: 5, paddingTop: 5}}>Potato Chips</Text>
        <Text style={{paddingLeft: 5, paddingTop: 5}}>Donuts</Text>
        <Text style={{paddingLeft: 5, paddingTop: 5}}>Chicken Nuggets</Text>
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
  searchHeader: {
    marginTop: 30,
  },
  searchInputView: {
    marginTop: 10,
  },
  textInput: {
    height: 45,
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.secondary,
    paddingLeft: 10,
    borderRadius: 15,
  },
  historyContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    height: '50%',
    width: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: 20,
  },
});
