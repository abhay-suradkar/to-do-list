import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const App = () => {
  const skill = [
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'python',
    },
    {
      id: 3,
      name: 'sql',
    },
    {
      id: 4,
      name: 'react',
    },
    {
      id: 5,
      name: 'js',
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      {skill.map(
        (
          item,
          index, // Use Skills instead of skill
        ) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedRadio(item.id)}>
            <View style={styles.radioWraper}>
              <View style={styles.radio}>
                {selectedRadio === item.id ? (
                  <View style={styles.radiobg} />
                ) : null}
              </View>
              <Text style={styles.radiotext}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ),
      )}
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
