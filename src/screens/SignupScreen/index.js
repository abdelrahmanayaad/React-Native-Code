import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import {COLORS} from '../../constants/Constants';
function SignupScreen(props) {
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    touched: false,
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function updateEmail(emailVal) {
    setEmail({
      value: emailVal,
      isValid: validateEmail(emailVal),
      touched: true,
    });
  }
  function validateEmail(val) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.msg}>Enter your deatils to register</Text>
        <View style={styles.inputs}>
          {/* TextInput 1 */}
          <Text style={styles.placeholderTitle}>Email</Text>
          <View
            style={
              email.isValid && email.touched
                ? {borderWidth: 1, borderColor: '#eee'}
                : {borderWidth: 1, borderColor: 'red', borderRadius: 5}
            }>
            <Input
              onChangeText={updateEmail}
              style={styles.input}
              bordered
              placeholder={'Enter your email'}
            />
          </View>
        </View>
        {/* TextInput 2 */}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Name</Text>
          <View>
            <Input
              style={styles.input}
              bordered
              placeholder={'Enter your Name'}
            />
          </View>
        </View>
        {/* TextInput 3 */}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Phone</Text>
          <View>
            <Input
              style={styles.input}
              bordered
              placeholder={'Enter your Phone'}
            />
          </View>
        </View>
        {/* TextInput 4 */}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Password</Text>
          <View>
            <Input
              style={styles.input}
              bordered
              placeholder={'Enter your Password'}
            />
          </View>
        </View>
        {/* TextInput 5 */}
        <View style={styles.inputs}>
          <Text style={styles.placeholderTitle}>Confirm Password</Text>
          <View>
            <Input
              style={styles.input}
              bordered
              placeholder={'Enter Confirm Password'}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={validateEmail}
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

export default SignupScreen;
