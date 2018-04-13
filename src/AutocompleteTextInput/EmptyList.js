import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const EmptyList = ({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    top: 41,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 16,
    zIndex: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.08,
    shadowRadius: 8
  }
})

export default EmptyList
