import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}> This is Cart Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161516',
        alignItems: 'center',
        justifyContent: 'center'
    }
})