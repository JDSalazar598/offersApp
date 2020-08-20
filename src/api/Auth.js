import {host} from '../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';

//metodo utilizado para iniciar sesion
export function Login(user) {
  const url = `${host}/Users/login`;
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((result) => {
        setStringValue(result.token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//funcion para almacenar la variable de sesion por token
const setStringValue = async (valor) => {
  try {
    await AsyncStorage.setItem('@Key', valor);
  } catch (error) {
    console.log(error);
  }
};

export const getMyStringValue = async () => {
  try {
    const value = await AsyncStorage.getItem('@Key')
    if (value !== null) {
      // We have data!!
      console.log("almacenado");
      console.log(value);
    }else{
        return ''
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
    try{
        console.log("sesion cerrada")
        await AsyncStorage.removeItem('@Key');
    }
    catch(error){

    }
}
