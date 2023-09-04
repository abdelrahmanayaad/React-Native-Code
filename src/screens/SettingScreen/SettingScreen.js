import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/settings.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
export default SettingScreen;