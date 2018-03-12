import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Modal } from 'react-native'

import AutocompleteTextInput from './js/AutocompleteTextInput'

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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

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
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          data={fruits}
          keyExtractor={x => x}
          placeholder='Type something...'
        />

        <Modal
          visible
          animationType='slide'
          transparent={false}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <AutocompleteTextInput
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              data={fruits}
              keyExtractor={x => x}
              placeholder='Type something...'
            />
          </View>
        </Modal>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
