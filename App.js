import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import Test from './src/screens/Test';
export class App extends Component {
  render() {
    return (
      <>
        <Test />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
