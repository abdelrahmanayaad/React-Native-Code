import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS, COLORS} from '../../constants/Constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(15),
  },
  title: {
    fontSize: FONTS.h5,
    color: COLORS.black,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: RFValue(10),
  },
  msg: {
    fontSize: FONTS.h8,
    color: COLORS.dark_gray,
    marginBottom: RFValue(30),
  },
  placeholderTitle: {
    fontSize: FONTS.h10,
    fontWeight: 'bold',
    marginBottom: RFValue(5),
  },
  input: {
    fontSize: FONTS.h9,
    height: RFValue(50),
  },
  inputs: {
    marginBottom: RFValue(15),
  },
  buttonWrapper: {
    marginTop: RFValue(15),
    marginBottom: RFValue(30),
  },
  loginMsg: {
    textAlign: 'center',
    fontSize: FONTS.h9,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  loginWord: {
    color: COLORS.blue,
    textDecorationLine: 'underline',
  },
});

export default styles;
