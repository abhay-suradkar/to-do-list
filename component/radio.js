import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioWraper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radiobg} /> : null}
          </View>
          <Text style={styles.radiotext}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioWraper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radiobg} /> : null}
          </View>
          <Text style={styles.radiotext}>Radio 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  radiotext: {
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
  radio: {
    height: 40,
    width: 40,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radiobg: {
    height: 28,
    width: 28,
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 4,
  },
  radioWraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default App;
