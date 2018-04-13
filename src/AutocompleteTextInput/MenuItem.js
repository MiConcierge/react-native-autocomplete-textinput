import React from 'react'
import { Text, Platform, TouchableNativeFeedback } from 'react-native'

const Touchable = Platform.select({
  ios: () => {
    const { TouchableOpacity } = require('react-native')
    return TouchableOpacity
  },
  android: () => {
    const { TouchableNativeFeedback } = require('react-native')
    return TouchableNativeFeedback
  }
})()

const Menu = ({ children, ...props }) => (
  <Touchable
    background={
      Platform.OS === 'android' &&
      TouchableNativeFeedback.SelectableBackground &&
      TouchableNativeFeedback.SelectableBackground()
    }>
    <Text {...props}>
      {children}
    </Text>
  </Touchable>
)

export default Menu
