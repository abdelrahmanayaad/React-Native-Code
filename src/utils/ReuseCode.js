import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@s',
  },
});

// export default styles;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Screen(props) {
  return (
    <View>
      <Text>Screen</Text>
    </View>
  );
}

export default Screen;
