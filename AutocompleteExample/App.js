import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Modal, TextInput } from 'react-native'

import AutocompleteTextInput from './src/AutocompleteTextInput'

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Grape',
  'Kiwi',
  'Mango',
  'Pear'
]

export default class App extends Component {
  state = {
    text: ''
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <AutocompleteTextInput
          inputStyle={{ width: 300, height: 40, backgroundColor: 'rgba(0, 0, 0, 0.34)' }}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          placeholder='Type something...'
          data={fruits}
          keyExtractor={x => x}
        />

        <TextInput
          style={{ zIndex: -1 }}
          placeholder='Type something...'
        />

        <TextInput
          style={{ zIndex: -1 }}
          placeholder='Type something...'
        />

        <TextInput
          placeholder='Type something...'
        />

        <TextInput
          placeholder='Type something...'
        />

        <TextInput
          placeholder='Type something...'
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
