import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

function Modal({showModal}) {
  return (
    <View style={styles.container}>
      <View style={{width: '90%', height: 80, backgroundColor: '#000'}}>
        <ActivityIndicator size={40} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backgroundColor: '#fff',
    elevation: 3,
  },
});
export default Modal;
