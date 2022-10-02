import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const {height} = Dimensions.get('window');
const styles = ScaledSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  container: {
    padding: '15@s',
  },
  header: {
    marginBottom: '15@vs',
  },
  title: {
    fontSize: '22@s',
    color: '#000',
    fontWeight: 'bold',
  },
  titleDiscription: {
    fontSize: '15@s',
    color: '#aaa',
  },
  discriptionView: {},
  textInputsView: {
    height: '300@vs',
    justifyContent: 'space-between',
    marginVertical: '40@vs',
  },
  error: {
    fontSize: '11@s',
    color: 'red',
  },
  buttonView: {
    marginBottom: '40@vs',
  },
  haveAcc: {
    fontSize: '15@s',
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  login: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
export default styles;
