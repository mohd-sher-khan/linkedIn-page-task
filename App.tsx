import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SignUp from './src/views/SignUp';
import SignIn from './src/views/SignIn';
import MainPage from './src/views/MainPage';
import auth from '@react-native-firebase/auth';
import SignInWithPhone from './src/views/SignInWithPhone';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

function ProfileScreen({ route }: any) {
  const id = route?.params?.id ?? {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style={styles.text}>ID: {id}</Text>
    </View>
  );
}

const linking = {
  prefixes: ['testingNew://'],
  config: {
    screens: {
      Home: 'Home',
      Profile: 'Profile/:id',
    },
  },
};

const App = () => {
  const [initial, setInitial] = useState(true);
  const [user, setUser] = useState(null);

  const information = (user: any) => {
    setUser(user);
    setInitial(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(information);
    return subscriber;
  }, []);

  console.log('checkUser---', user);
  if (initial) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Main" component={MainPage} />
        ) : (
          <>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Phone" component={SignInWithPhone} />
          </>
        )}

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
