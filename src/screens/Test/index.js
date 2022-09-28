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

  //errors
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  //function of inputs validation
  function validate() {
    let error = 0;

    //email
    const regEmail =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (email.trim().length == 0) {
      setEmailError('Must Enter Email');
      error++;
    } else if (regEmail.test(email.trim()) == false) {
      setEmailError('Enter Correct Email');
      error++;
    } else {
      setEmailError('');
    }

    //phone
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (phone.trim().length == 0) {
      setPhoneError('Must enter phone');
      error++;
    } else if (reg.test(phone.trim()) == false) {
      setPhoneError('Enter correct phone');
      error++;
    } else {
      setPhoneError('');
    }
    if (error == 0) {
      alert('Hello Validation');
    }
  }

  function onChangeEmail(value) {
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(value.trim());
  }

  const onChangePhone = value => {
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    return reg.test(value.trim());
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.msg}>Enter your deatils to register</Text>

        <View style={styles.inputs}>
          {/* TextInput 1 */}
          <Text style={styles.placeholderTitle}>Email</Text>
          <View>
            <Input
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

        <View style={styles.inputs}>
          {/* TextInput 2 */}
          <Text style={styles.placeholderTitle}>Phone</Text>
          <View>
            <Input
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
