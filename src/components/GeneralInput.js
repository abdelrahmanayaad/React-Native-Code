import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function GeneralInput(props) {
  const {
    height,
    elevation,
    left,
    right,
    iconName,
    iconColor,
    password,
    style,
    onPress,
    ...rest
  } = props;
  return (
    <View
      style={[
        {
          height: height || 60,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          elevation: elevation || 2,
          borderRadius: 10,
          paddingHorizontal: 5,
        },
        style,
      ]}>
      {left && (
        <Icon
          name={iconName}
          style={{fontSize: 25, color: iconColor || '#000'}}
        />
      )}
      <TextInput {...rest} style={{flex: 1, fontSize: 16, color: '#000'}} />
      {right && (
        <TouchableOpacity onPress={onPress}>
          <Icon
            name={iconName}
            style={{fontSize: 25, color: iconColor || '#000'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
