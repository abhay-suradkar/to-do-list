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
import Register from './Register';
import Home from './home';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showHome, setshowHome] = useState(false);
  const handelHome = () => {
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password === '') {
      setpasswordError(true);
    } else {
      setpasswordError(false);
    }
    if (email !== '' && password !== '') {
      setshowHome(true);
    }
  };
  if (showHome) {
    return <Home />;
  }
  if (showRegister) {
    return <Register />;
  }
  return (
    <View style={Styles.main}>
      <ScrollView contentContainerStyle={Styles.scroll}>
        <View>
          <View style={Styles.taskView}>
            <Text style={Styles.task}>Task Master</Text>
          </View>
          <View>
            <Text style={Styles.Wel}>WelCome !</Text>
          </View>
        </View>
        <View style={Styles.inputView}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./gmail.png')}
              style={Styles.hiddenItemImage2}
            />
            <Text style={Styles.label}>Email</Text>
          </View>
          <TextInput
            placeholder="enter your email"
            placeholderTextColor="black"
            value={email}
            onChangeText={text => setemail(text)}
            style={Styles.input}
          />
          {emailError && <Text style={Styles.error}>Email is required</Text>}
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./lock.png')}
              style={Styles.hiddenItemImage2}
            />
            <Text style={Styles.label}>Password</Text>
          </View>
          <TextInput
            placeholder="enter password"
            placeholderTextColor="black"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setpassword(text)}
            style={Styles.input}
          />
          {passwordError && (
            <Text style={Styles.error}>Password is required</Text>
          )}
          <View style={Styles.button}>
            <Button title="Login" color="#7ED7C1" onPress={handelHome} />
          </View>
          <View style={Styles.last}>
            <Text style={Styles.sign}>Don't have an account? sign up</Text>
            <Button title="Sign up" onPress={() => setShowRegister(true)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
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
    borderRadius: 16,
    alignItems: 'center',
  },
  task: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  Wel: {
    fontSize: 23,
    marginTop: 20,
    marginLeft: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 10,
    marginTop: 20,
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
    paddingLeft: 10,
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
  last: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
  },
  sign: {
    fontSize: 15,
    color: 'black',
    margin: 10,
  },
  error: {
    color: 'red',
    marginTop: '5',
    marginLeft: '10',
  },
  hiddenItemImage2: {
    marginLeft: 10,
    marginTop: 20,
    width: 25,
    height: 25,
  },
});
export default Login;
