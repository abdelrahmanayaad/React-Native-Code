import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapScreen from './src/screens/Maps/Maps';
import Counter from './src/screens/Counter';
export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
