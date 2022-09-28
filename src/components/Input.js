import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {COLORS, FONTS} from '../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

function Input(props) {
  const {underline, bordered} = props;
  return (
    <View
      style={{backgroundColor: '#eee', borderRadius: 5, paddingHorizontal: 5}}>
      <TextInput {...props} placeholderTextColor={COLORS.dark_gray} />
      {underline && (
        <View style={{height: RFValue(1), backgroundColor: COLORS.black}} />
      )}
    </View>
  );
}

export default Input;
