import React from 'react'
import { View } from 'react-native'

import Input from './Input'
import Menu from './Menu'
import MenuItem from './MenuItem'

function _renderItem ({ item }) {
  return <MenuItem>
    { item }
  </MenuItem>
}

function queryFilter (value) {
  return item => {
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
  keyExtractor
}) => (
  <View>
    <Input
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
    <Menu
      filter={value}
      style={{ maxHeight: 30, backgroundColor: 'rgba(255, 0, 0, 0.5)' }}
      data={data.filter(queryFilter(value))}
      renderItem={_renderItem}
      keyExtractor={keyExtractor}
    />
  </View>
)

export default AutocompleteTextInput
