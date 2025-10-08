import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';

const SignUp = () => {
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const SignUpHandle = () => {
    setLoading(true);
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
        ToastAndroid.show('successfully created', ToastAndroid.SHORT);
        setLoading(false);
      })
      .catch(err => {
        if (err.code == 'auth/email-already-in-use') {
          setLoading(false);
          Alert.alert('same credential already in use');
        }
        if (err.code == 'auth/invalid-email') {
          setLoading(false);
          ToastAndroid.show(
            'Entered Invalid Email, please check again',
            ToastAndroid.LONG,
          );
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.keyStyle}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.keyStyle}>Email</Text>
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

        <TouchableOpacity style={styles.button} onPress={SignUpHandle}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>
            {loading ? <ActivityIndicator color="white" /> : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ color: 'blue', fontSize: 15 }}> SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
