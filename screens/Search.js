import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
         <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Search Recipes</Text>
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
     }
})