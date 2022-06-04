import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../colors/Colors'

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
         <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Search Recipes</Text>
      </View>
      <View style={styles.searchInputView}>
        <TextInput  placeholder='Search' style={styles.textInput}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161516',
        padding: 20
    },
     searchHeader: {
       marginTop: 30,
     },
     searchInputView: {
       marginTop: 10
     },
     textInput: {
       height: 45,
       width: '90%',
       borderWidth: 1,
       borderColor: Colors.secondary,
       paddingLeft: 10,
       borderRadius: 15
     }
})