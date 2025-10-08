import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPhoneNumber
} from '@react-native-firebase/auth';  

//need to work again, not working properly, added some dependency in react native.

const SignInWithPhone = ({ navigation }) => {
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState();

  const handleLogin = async() => {
      console.log('presses----')
const confirmation = await signInWithPhoneNumber(getAuth(), phoneNumber);
signInWithPhoneNumber
// setCode(confirmCode)
// setNumber('')
  console.log('ConfirmCode----',confirmation)
  };

  console.log('code----',code)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!code ? (
          <>
            <Text style={styles.keyStyle}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="mobile number"
              value={number}
              onChangeText={text => setNumber(text)}
              keyboardType="numeric"
            />
          </>
        ) : (
          <>
            <Text style={styles.keyStyle}>OTP</Text>
            <TextInput
              style={styles.input}
              placeholder="Otp"
              value={otp}
              onChangeText={text => setOtp(text)}
              keyboardType="numeric"
            />
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>
            {loading ? <ActivityIndicator color="white" /> : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{}}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: 'blue', fontSize: 15 }}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInWithPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 270,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  keyStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 270,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
