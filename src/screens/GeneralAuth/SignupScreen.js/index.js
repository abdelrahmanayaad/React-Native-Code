import React, {useState} from 'react';
import {View, Text, ScrollView, StatusBar, Dimensions} from 'react-native';
import {GeneralButton, GeneralInput} from '../../../components';
import styles from './styles';
import Loader from '../../../components/Loader';
const {height} = Dimensions.get('window');

function SignupScreen(props) {
  // Signup form
  const [formObj, setFormObj] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  //Touched
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPhone, setTouchedPhone] = useState(false);

  // is Loading
  const [isLoading, setIsLoading] = useState(false);

  // Password icons
  const [passIcon, setPassIcon] = useState(true);
  const [confirmIcon, setConfirmIcon] = useState(true);

  // Errors
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  // Functions

  // onChangeText... -> real correct error in the same time if he write right

  function onChangeTextEmail(val) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(val);
  }

  function onChangeTextPhone(val) {
    const phoneReg = /^[0-9]+$/;
    if (val.length == 11) return phoneReg.test(val);
  }

  function onChangeTextPassword(val) {
    return val.length > 6;
  }

  function onChangeTextConfirm(val) {
    return val == formObj.password;
  }

  function Validate() {
    let error = 0;

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formObj.email.trim().length == 0) {
      setEmailError('Must Enter Email');
      error++;
    } else if (reg.test(formObj.email) == false) {
      setEmailError('Wrong Email');
      error++;
    } else setEmailError('');

    const phoneReg = /^[0-9]+$/;
    if (formObj.phone.trim().length == 0) {
      setPhoneError('Must Enter Phone');
      error++;
    } else if (phoneReg.test(formObj.phone) == false) {
      setPhoneError('Wrong Phone');
      error++;
    } else setPhoneError('');

    if (formObj.password.length == 0) {
      setPasswordError('Must Enter Password');
      error++;
    } else if (formObj.password.length < 6) {
      setPasswordError('Minmum Password Consists of 6 Letters');
      error++;
    } else setPasswordError('');

    if (formObj.confirmPassword.length == 0) {
      setConfirmError('Must Enter Confirm Password');
      error++;
    } else if (formObj.confirmPassword != formObj.password) {
      setConfirmError('Confirm Password not Match');
      error++;
    } else setConfirmError('');

    if (error == 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }

  // Return Function
  function input(
    placeholder,
    onChangeText,
    error,
    iconName,
    iconColor,
    secureTextEntry = false,
    onPress,
  ) {
    return (
      <View>
        <GeneralInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          right
          iconName={iconName}
          iconColor={iconColor}
          secureTextEntry={secureTextEntry}
          onPress={onPress}
        />
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  // onChange... -> when he start write in textInput

  const onChangeEmail = val => {
    setFormObj({...formObj, email: val});
    setTouchedEmail(true);
    if (onChangeTextEmail(val)) {
      setEmailError('');
    }
  };

  const onChangePhone = val => {
    setFormObj({...formObj, phone: val});
    setTouchedPhone(true);
    if (onChangeTextPhone(val)) {
      setPhoneError('');
    }
  };

  const onChangePassword = val => {
    setFormObj({...formObj, password: val});
    if (onChangeTextPassword(val)) {
      setPasswordError('');
    }
  };

  const onChangeConfirmPassword = val => {
    setFormObj({...formObj, confirmPassword: val});
    if (onChangeTextConfirm(val)) {
      setConfirmError('');
    }
  };

  return (
    <View style={styles.wrapperContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          isLoading ? {height: height} : null,
        ]}>
        <StatusBar backgroundColor={'#000'} />
        <Loader visiable={isLoading} />
        <View style={styles.header}>
          <Text style={styles.title}>Register</Text>
        </View>
        <View style={styles.discriptionView}>
          <Text style={styles.titleDiscription}>
            Enter Your Details For Register
          </Text>
        </View>
        <View style={styles.textInputsView}>
          {input(
            'Email',
            onChangeEmail, // onChange when he start write in input
            emailError, // error under textInput
            onChangeTextEmail(formObj.email) // check after he wrote if it right or not to remove icon wrong or correct
              ? 'md-checkmark-sharp' // true ? icon === correct
              : touchedEmail //false -> check if touched true if true iconName => wrong else null
              ? 'md-close-sharp'
              : null,
            onChangeTextEmail(formObj.email) ? 'green' : 'red', // -> Iocn color
          )}

          {input(
            'Phone',
            onChangePhone,
            phoneError,
            onChangeTextPhone(formObj.phone)
              ? 'md-checkmark-sharp'
              : touchedPhone
              ? 'md-close-sharp'
              : null,
            onChangeTextPhone(formObj.phone) ? 'green' : 'red',
          )}
          {input(
            'Password',
            onChangePassword,
            passwordError,
            passIcon ? 'eye-off' : 'eye',
            null, // color of icon
            passIcon, // secureTextEntry -> passIcon == true ? "secure" : "not secure"
            () => {
              setPassIcon(!passIcon); // if i click on eye icon convert it to oppsite
            },
          )}
          {input(
            'Confirm Password',
            onChangeConfirmPassword,
            confirmError,
            confirmIcon ? 'eye-off' : 'eye',
            null,
            confirmIcon,
            () => {
              setConfirmIcon(!confirmIcon);
            },
          )}
        </View>
        <View style={styles.buttonView}>
          <GeneralButton
            onPress={Validate}
            title="Sign up"
            // isLoading={!!isLoading}
          />
        </View>
        <View>
          <Text style={styles.haveAcc}>
            Already Have Account? <Text style={styles.login}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;
