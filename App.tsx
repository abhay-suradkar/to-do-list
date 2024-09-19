/* eslint-disable react/react-in-jsx-scope */
import react, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './component/Login';

class App extends Component {
  componentDidMount(): void {
    SplashScreen.hide();
  }
  render(): react.ReactNode {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
