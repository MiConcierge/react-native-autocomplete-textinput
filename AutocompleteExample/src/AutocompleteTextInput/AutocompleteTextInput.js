import React from 'react'
import { View } from 'react-native'
import isEmpty from 'lodash/isEmpty'

import Input from './Input'
import Menu from './Menu'
import MenuItem from './MenuItem'
import EmptyList from './EmptyList'

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
  hideEmptyList,
  onChangeText,
  placeholder,
  data,
  renderItem,
  keyExtractor,
  filter = queryFilter,
  inputStyle,
  menuStyle,
  menuItemStyle,
  containerStyle,
  customInputComponent,
  CustomEmptyList,
  onPressIn,
  onTouchStart,
  onPressOut,
  onMomentumScrollEnd,
  onScrollEndDrag
}) => (
  <View style={containerStyle}>
    {
      customInputComponent
        ? customInputComponent({
          placeholder,
          value,
          onChangeText
        })
        : <Input
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
    }
    {
      !hideEmptyList && !isEmpty(value) && isEmpty(data.filter(filter(value)))
        ? <EmptyList
          text='No results found'
        />
        : !isEmpty(value) && <Menu
          onPressIn={onPressIn}
          onTouchStart={onTouchStart}
          onPressOut={onPressOut}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
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
