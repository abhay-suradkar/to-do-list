import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const handleNameChange = text => {
    setName(text);
  };
  const handleSubmit = () => {
    if (name) {
      setList([list, name]);
      setName('');
    }
  };
  return (
    <View>
      <Text>This is the pass Game</Text>
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="white"
        style={Styles.input}
        onChangeText={handleNameChange}
      />
      <Button title="Add" onPress={handleSubmit} />
      <FlatList
        data={list}
        renderItem={({item}) => <Text style={Styles.flat}>{item}</Text>}
        keyExtractor={item => item}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  flat: {
    fontSize: 20,
    color: 'pink',
  },
});
export default App;
