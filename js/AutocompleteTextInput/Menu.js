import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

const Menu = ({ style, ...props }) => (
  <FlatList
    style={[styles.container, style]}
    {...props}
  />
)

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    top: 17,
    maxHeight: 30,
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.08,
    shadowRadius: 8
  }
})

export default Menu
