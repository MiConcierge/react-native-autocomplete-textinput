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
          customInputComponent={
            (props) => <TextInput
              {...props}
              style={{ fontSize: 30, width: 200 }}
            />
          }
          menuStyle={{ top: 60 }}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          placeholder='Type something...'
          data={fruits}
          keyExtractor={x => x}
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
