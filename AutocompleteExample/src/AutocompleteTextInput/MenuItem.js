import React from 'react'
import { StyleSheet, View, Text, Platform, TouchableNativeFeedback } from 'react-native'

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
    <View style={styles.container}>
      <Text {...props}>
        {children}
      </Text>
    </View>
  </Touchable>
)

const styles = StyleSheet.create({
  container: {
    height: 48,
    zIndex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16
  }
})

export default Menu
