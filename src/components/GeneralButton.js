import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

export function GeneralButton(props) {
  const {
    backgroundColor,
    title,
    color,
    fontSize,
    height,
    borderRadius,
    activeOpacity,
    isLoading,
    AIColor,
    AISize,
    disabled,
    ...rest
  } = props;
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      activeOpacity={activeOpacity || 0.5}
      style={{
        backgroundColor: backgroundColor || '#000',
        height: height || 60,
        borderRadius: borderRadius || 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator size={AISize || 35} color={AIColor || '#fff'} />
      ) : (
        <Text
          style={{
            fontSize: fontSize || 24,
            fontWeight: 'bold',
            color: color || '#fff',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
