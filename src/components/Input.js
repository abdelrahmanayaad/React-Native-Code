import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS} from '../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

function Input(props) {
  const {
    underline,
    bordered,
    isValid,
    feedback,
    touched,
    style,
    password,
    ...rest
  } = props;
  return (
    <View
      style={[
        {
          backgroundColor: '#eee',
          borderRadius: 5,
          paddingHorizontal: 5,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
        },
        isValid
          ? {borderColor: 'green'}
          : {borderColor: touched ? 'red' : '#eee'},
      ]}>
      <TextInput
        style={[{flex: 1}, style]}
        {...rest}
        placeholderTextColor={COLORS.dark_gray}
      />
      {underline && (
        <View style={{height: RFValue(1), backgroundColor: COLORS.black}} />
      )}
      {feedback && touched && (
        <Icon
          name={isValid ? 'check' : 'close'}
          size={20}
          style={isValid ? {color: 'green'} : {color: 'red'}}
        />
      )}
      {password && (
        <Icon
          name={isValid ? 'eye' : 'eyeo'}
          size={20}
          style={{color: '#000'}}
        />
      )}
    </View>
  );
}

export default Input;
