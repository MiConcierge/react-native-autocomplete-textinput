import React from 'react'
import { TouchableWithoutFeedback, FlatList, Platform, StyleSheet } from 'react-native'

const Menu = ({ style, onPressIn, onPressOut, ...props }) => (
  <TouchableWithoutFeedback
    onPressOut={onPressOut}
    onPressIn={onPressIn}>
    <FlatList
      style={[styles.container, style]}
      {...props}
    />
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    top: Platform.OS === 'ios' ? 17 : 41,
    maxHeight: 60,
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

export default Menu
