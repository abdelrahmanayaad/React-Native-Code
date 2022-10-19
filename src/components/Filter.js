import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import List from '../screens/Test/List';

function Filter() {
  const [state, setState] = useState([
    {
      name: 'Abdelrahman Ayad',
      phone: '01026669167',
      age: 20,
      type: 'boy',
    },
    // {
    //   name: 'Rehab Sobh',
    //   phone: '01020577102',
    //   age: 20,
    //   type: 'girl',
    // },
    {
      name: 'Youssef Ayad',
      phone: '01022222222',
      age: 18,
      type: 'boy',
    },
    {
      name: 'Moaz Ayad',
      phone: '01033333333',
      age: 14,
      type: 'boy',
    },
    {
      name: 'Radwa Ayad',
      phone: '01044444444',
      age: 13,
      type: 'girl',
    },
  ]);
  const [filterNames, setFilterNames] = useState([...state]);

  function search(value) {
    if (value) {
      let filterData = state.filter(({name}) =>
        name.trim().toLowerCase().includes(value.trim().toLowerCase()),
      );
      setFilterNames(filterData);
    } else {
      setFilterNames(state);
    }
  }

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        onChangeText={value => {
          search(value);
        }}
      />
      {filterNames.map((el, idx) => {
        return (
          <View
            key={idx}
            style={[
              styles.card,
              {backgroundColor: el.type === 'boy' ? '#0ff' : 'pink'},
            ]}>
            <Text style={styles.name}>{el.name}</Text>
            <Text style={styles.phone}>{el.phone}</Text>
            <Text style={styles.age}>{el.age}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: 300,
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 300,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  phone: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  age: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
});

export default Filter;
