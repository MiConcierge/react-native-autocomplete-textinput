import React from 'react'
import { Text } from 'react-native'

const Menu = ({ children, ...props }) => (
  <Text {...props}>
    {children}
  </Text>
)

export default Menu
