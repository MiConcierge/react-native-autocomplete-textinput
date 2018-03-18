import React from 'react'
import { View } from 'react-native'
import isEmpty from 'lodash.isempty'

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
  containerStyle,
  InputComponent,
  onPressIn,
  onTouchStart,
  filter = queryFilter
}) => (
  <View style={containerStyle}>
    {
      InputComponent
        ? <InputComponent
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        : <Input
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
    }
    {
      !isEmpty(value) && <Menu
        onPressIn={onPressIn}
        onTouchStart={onTouchStart}
        style={menuStyle}
        filter={value}
        data={data.filter(filter(value))}
        renderItem={renderItem || _renderItem(menuItemStyle)}
        keyExtractor={keyExtractor}
      />
    }
  </View>
)

export default AutocompleteTextInput
