/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [inputText, saveInputText] = useState('');

  useEffect(() => {
    getDataaStorage();
  }, []);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('name', inputText );
    } catch (error){
      console.log(error);
    }
  };

  const getDataaStorage = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      console.log(name);
    } catch (error){
      console.log(error);
    }
  };

  return (
    <>
      <View style = {styles.container}>
        <TextInput
          placeholder="Escribe tu nombre"
          style = {styles.input}
          onChange = { text => saveInputText(text)}
          />
        <Button
          title="Guardar"
          color='#333'
          onPress= { () => saveData()}
        />
        <TouchableHighlight style = {styles.btnDelete}>
          <Text style = {styles.txtDelete}> Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  btnDelete: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  txtDelete: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});

export default App;
