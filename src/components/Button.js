import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../constants/Constants';

function Button(props) {
  const {title, backgroundColor} = props;
  return (
    <TouchableOpacity {...props} style={[styles.container, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: RFValue(50),

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(5),
  },
  title: {
    fontSize: FONTS.h7,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default Button;
