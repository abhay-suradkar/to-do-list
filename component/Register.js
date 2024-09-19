/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Login from './Login';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [registered, setRegistered] = useState(false);
  const handleRegister = () => {
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
    if (email !== '' && password === confirmPassword) {
      setRegistered(true);
    }
  };
  if (registered) {
    return <Login />;
  }
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <View style={styles.taskView}>
            <Text style={styles.task}>Task Master</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome!</Text>
          </View>
        </View>
        <View style={styles.inputView}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./gmail.png')}
              style={styles.hiddenItemImage2}
            />
            <Text style={styles.label}>Email</Text>
          </View>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          {emailError && <Text style={styles.error}>Email is required</Text>}
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./lock.png')}
              style={styles.hiddenItemImage2}
            />
            <Text style={styles.label}>Password</Text>
          </View>
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./lock.png')}
              style={styles.hiddenItemImage2}
            />
            <Text style={styles.label}>Confirm Password</Text>
          </View>
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor="black"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />
          {!passwordMatch && (
            <Text style={styles.error}>Passwords do not match</Text>
          )}
          <View style={styles.button}>
            <Button title="Register" color="#7ED7C1" onPress={handleRegister} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: '#7ED7C1',
  },
  taskView: {
    padding: 30,
    backgroundColor: '#7ED7C1',
    textAlign: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  task: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 23,
    marginTop: 20,
    marginLeft: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F8F6E3',
    fontSize: 16,
    margin: 5,
    color: 'black',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    height: 45,
  },
  inputView: {
    flex: 3,
    paddingTop: 20,
    backgroundColor: '#F8F6E3',
    borderRadius: 30,
  },
  button: {
    margin: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
    marginLeft: 10,
  },
  hiddenItemImage2: {
    marginLeft: 10,
    marginTop: 15,
    width: 25,
    height: 25,
  },
});
export default Register;
