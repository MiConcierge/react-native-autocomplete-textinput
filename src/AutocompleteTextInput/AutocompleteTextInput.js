import React from 'react'
import { View } from 'react-native'

import Input from './Input'
import Menu from './Menu'
import MenuItem from './MenuItem'

function _renderItem (style) {
  return ({ item }) => <MenuItem style={style}>
    { item }
  </MenuItem>
}

function queryFilter (value = '') {
  return item => {
    if (value === '') return false
    return item
      .trim()
      .toLowerCase()
      .search(
        value
          .trim()
          .toLowerCase()
      ) >= 0
  }
}

const AutocompleteTextInput = ({
  value,
  onChangeText,
  placeholder,
  data,
  renderItem,
  keyExtractor,
  inputStyle,
  menuStyle,
  menuItemStyle,
  containerStyle
}) => (
  <View style={containerStyle}>
    <Input
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
    <Menu
      style={inputStyle}
      filter={value}
      data={data.filter(queryFilter(value))}
      renderItem={renderItem || _renderItem(menuItemStyle)}
      keyExtractor={keyExtractor}
    />
  </View>
)

export default AutocompleteTextInput
