import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
function Loader(props) {
  const {visiable} = props;
  return (
    visiable && (
      <View style={[styles.container, {width, height}]}>
        <View style={styles.Loader}>
          <ActivityIndicator size={30} color="#000" />
          <Text style={styles.loading}>Loading...</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  Loader: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 70,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loading: {
    fontSize: 18,
    color: '#000',
    marginStart: 10,
  },
});

export default Loader;
