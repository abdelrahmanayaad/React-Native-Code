import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GeneralButton, GeneralInput} from './src/components';
import SignupScreen from './src/screens/GeneralAuth/SignupScreen.js';
export class App extends Component {
  render() {
    return (
      <>
        <SignupScreen />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default App;
