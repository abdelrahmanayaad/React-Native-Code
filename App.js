import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Task from './src/Task/Task';
import DropdownComponent from './src/Task/DropDown';

function App() {
  return (
    <View>
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
