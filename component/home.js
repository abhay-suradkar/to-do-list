/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Login from './Login';
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [login, setLogin] = useState(false);
  const handleNameChange = text => {
    setName(text);
  };
  const handleSubmit = () => {
    if (name) {
      if (editIndex !== null) {
        const updatedList = [...list];
        updatedList[editIndex] = name;
        setList(updatedList);
        setEditIndex(null);
      } else {
        setList([...list, name]);
      }
      setName('');
      setShowModal(false);
    }
  };
  const handleEdit = index => {
    setName(list[index]);
    setEditIndex(index);
    setShowModal(true);
  };
  const handleDelete = item => {
    setList(list.filter(task => task !== item));
  };
  const CellRender = ({item}) => {
    return (
      <View>
        <Text style={Styles.flat}>{item}</Text>
      </View>
    );
  };
  if (login) {
    return <Login />;
  }
  return (
    <View style={Styles.main}>
      <View style={Styles.taskView}>
        <Text style={Styles.task}>Task Master</Text>
        <TouchableOpacity style={Styles.exit} onPress={setLogin}>
          <Image
            source={require('./logout.png')}
            style={Styles.hiddenItemImage2}
          />
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={showModal}>
        <View style={Styles.modalView}>
          <View style={Styles.modal}>
            <TextInput
              placeholder="Enter Daily Task"
              placeholderTextColor="black"
              style={Styles.Input}
              value={name} // Pre-fill the input with the current name
              onChangeText={handleNameChange}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={Styles.savebutton}
                onPress={handleSubmit}>
                <Text style={Styles.buttontext2}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.cancalbutton}
                onPress={() => {
                  setName(''); // Clear the input when canceling
                  setShowModal(false);
                }}>
                <Text style={Styles.buttontext2}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <SwipeListView
        data={list}
        renderItem={({item}) => <CellRender item={item} />}
        renderHiddenItem={({item, index}) => (
          <View style={Styles.hiddenItemContainer}>
            <TouchableOpacity
              style={Styles.deleteButton}
              onPress={() => handleDelete(item)}>
              <Image
                source={require('./trash.png')}
                style={Styles.hiddenItemImage}
              />
            </TouchableOpacity>
            <View style={Styles.rightButtonsContainer}>
              <TouchableOpacity
                style={Styles.editButton}
                onPress={() => handleEdit(index)}>
                <Image
                  source={require('./editing.png')}
                  style={Styles.hiddenItemImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
        keyExtractor={(item, index) => `${item}-${index}`} // Ensure the key is unique
      />
      <View style={Styles.touchable}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => setShowModal(true)}>
          <Text style={Styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F8F6E3',
  },
  task: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  taskView: {
    backgroundColor: '#7ED7C1',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modal: {
    backgroundColor: 'lightblue',
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  Input: {
    fontSize: 23,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F7EFE5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
  },
  touchable: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  savebutton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    marginRight: 5,
  },
  buttontext2: {
    color: 'white',
    fontSize: 15,
  },
  cancalbutton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    marginLeft: 55,
  },
  flat: {
    fontSize: 17,
    color: 'black',
    backgroundColor: '#7ED7C1',
    textAlign: 'auto',
    margin: 10,
    paddingLeft: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  hiddenItemContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: '#FF8A8A',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 15,
  },
  rightButtonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#9DBDFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 50,
    marginTop: 10,
    marginRight: 15,
    borderRadius: 15,
  },
  hiddenItemImage: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
  hiddenItemImage2: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  exit: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: 25,
    marginRight: 10,
  },
});

export default Home;
