import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function List(props) {
  const {personData, clickedItem} = props;
  return (
    <View>
      {personData.map((el, idx) => {
        return (
          <View key={idx} style={styles.list}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => clickedItem(idx)}>
              <Text>X</Text>
            </TouchableOpacity>
            <Text>{el.name}</Text>
            <Text>{el.phone}</Text>
            <Text>{el.age}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: 200,
    height: 100,
    backgroundColor: '#0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  btn: {
    position: 'absolute',
    right: -10,
    top: -10,
    width: 22,
    height: 22,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
  },
});
