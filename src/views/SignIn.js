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
} from '@react-native-firebase/auth';
import SignInWithPhone from './SignInWithPhone';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        console.log('successfully Loged In');
        navigation.navigate('Main');
      })
      .catch(err => {
        setLoading(false);
        console.log('error---', err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.keyStyle}>EmailId</Text>
        <TextInput
          style={styles.input}
          placeholder="email id"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.keyStyle}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
          keyboardType="numeric"
        />

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
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 260,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            top: 10,
          }}
          onPress={()=>navigation.navigate('Phone')}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            SignIn with Phone Number
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

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
