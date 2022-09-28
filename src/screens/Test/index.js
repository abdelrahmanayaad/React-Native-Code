import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import {COLORS} from '../../constants/Constants';
function Test(props) {
  // Values in TextInput
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //Icons
  const [emailIcon, setEmailIcon] = useState(false);
  const [phoneIcon, setPhoneIcon] = useState(false);

  //touched
  const [emailTouch, setEmailTouch] = useState(false);
  const [phoneTouch, setPhoneTouch] = useState(false);
  const [passwordTouch, setpasswordTouch] = useState(false);
  const [confirmPasswordTouch, setconfirmPasswordTouch] = useState(false);

  //errors
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');

  //function of inputs validation
  function validate() {
    let error = 0;

    //email
    const regEmail =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (email.trim().length == 0) {
      setEmailError('Must Enter Email');
      setEmailIcon(false);
      setEmailTouch(true);
      error++;
    } else if (regEmail.test(email.trim()) == false) {
      setEmailError('Enter Correct Email');
      setEmailIcon(false);
      setEmailTouch(true);
      error++;
    } else {
      setEmailError('');
      setEmailIcon(true);
      setEmailTouch(true);
    }

    //phone
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (phone.trim().length == 0) {
      setPhoneError('Must enter phone');
      setPhoneIcon(false);
      setPhoneTouch(true);
      error++;
    } else if (reg.test(phone.trim()) == false) {
      setPhoneError('Enter correct phone');
      setPhoneIcon(false);
      setPhoneTouch(true);
      error++;
    } else {
      setPhoneError('');
      setPhoneIcon(true);
      setPhoneTouch(true);
    }

    // password

    if (password.length == 0) {
      setpasswordError('Must enter Password');
      setpasswordTouch(true);
      error++;
    } else if (password.length < 6) {
      setpasswordError('Enter correct Password');
      setpasswordTouch(true);
      error++;
    } else {
      setpasswordError('');
      setpasswordTouch(true);
    }

    // confirmPassword

    if (confirmPassword.length == 0) {
      setconfirmPasswordError('Must enter confirm Password');
      setconfirmPasswordTouch(true);
      error++;
    } else if (confirmPassword !== password) {
      setconfirmPasswordError('confirm password not match');
      setconfirmPasswordTouch(true);
      error++;
    } else {
      setpasswordError('');
      setpasswordTouch(true);
    }

    if (error == 0) {
      alert('Hello Validation');
    }
  }

  function onChangeEmail(value) {
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (reg.test(value.trim()) == true) {
      setEmailIcon(true);
      setEmailTouch(true);
      return true;
    } else {
      setEmailIcon(false);
      setEmailTouch(true);
      return false;
    }
  }

  const onChangePhone = value => {
    const reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (reg.test(value.trim()) == true) {
      setPhoneIcon(true);
      setPhoneTouch(true);
      return true;
    } else {
      setPhoneIcon(false);
      setPhoneTouch(true);
      return false;
    }
  };

  const onChangePassword = value => {
    if (password.length > 6) {
      setpasswordTouch(true);
      return true;
    } else {
      setpasswordTouch(true);
      return false;
    }
  };

  const onChangeConfirmPassword = value => {
    if (confirmPassword.length > 6 || confirmPassword != password) {
      setconfirmPasswordTouch(true);
      return true;
    } else {
      setconfirmPasswordTouch(true);
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.msg}>Enter your deatils to register</Text>

        {/* TextInput 1 */}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Email</Text>
          <View>
            <Input
              feedback
              isValid={emailIcon}
              touched={emailTouch}
              style={styles.input}
              bordered
              placeholder={'Enter your email'}
              onChangeText={value => {
                setEmail(value);
                if (onChangeEmail(value)) {
                  setEmailError('');
                }
              }}
            />
            <Text style={{color: 'red'}}>{emailError}</Text>
          </View>
        </View>

        {/* TextInput 2 */}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Phone</Text>
          <View>
            <Input
              feedback
              isValid={phoneIcon}
              touched={phoneTouch}
              maxLength={11}
              style={styles.input}
              bordered
              placeholder={'Enter your Phone'}
              onChangeText={value => {
                setPhone(value);
                if (onChangePhone(value)) {
                  setPhoneError('');
                }
              }}
            />
            <Text style={{color: 'red'}}>{phoneError}</Text>
          </View>
        </View>

        {/*TextInput 3*/}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Password</Text>
          <View>
            <Input
              password
              secureTextEntry={true}
              style={styles.input}
              bordered
              placeholder={'Enter Password'}
              onChangeText={value => {
                setPassword(value);
                if (onChangePassword(value)) {
                  setpasswordError('');
                }
              }}
            />
            <Text style={{color: 'red'}}>{passwordError}</Text>
          </View>
        </View>

        {/*TextInput 4*/}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Confirm Password</Text>
          <View>
            <Input
              password
              secureTextEntry={true}
              style={styles.input}
              bordered
              placeholder={'Confirm Password'}
              onChangeText={value => {
                setConfirmPassword(value);
                if (onChangeConfirmPassword(value)) {
                  setconfirmPasswordError('');
                }
              }}
            />
            <Text style={{color: 'red'}}>{confirmPasswordError}</Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={validate}
            title="Register"
            backgroundColor={COLORS.blue}
          />
        </View>
        <Text style={styles.loginMsg}>
          Already have account? <Text style={styles.loginWord}>Login</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

export default Test;
