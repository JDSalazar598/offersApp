import React, {useState} from 'react';
import {TextInput, Button, Text, Title} from 'react-native-paper';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Login} from '../api/Users';

const {width} = Dimensions.get('window');

export default function LoginForm(props) {
    //destructuring de props para obtener navigation
    const {navigation} = props;
    //objeto useState para almacenar datos del formulario
    const [formData, setFormData] = useState(defaultValue())
    

  return (
    <>
      <View style={styles.container}>
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Username"
          mode="outlined"
          onChange={(e) => setFormData({...formData,username: e.nativeEvent.text})}
        />
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          onChange={(e) => setFormData({...formData,password: e.nativeEvent.text})}
        />

        <View style={styles.forgot}>
          <Text style={styles.forgotText}>
            ¿Olvidaste tus datos de inicio de sesiòn?
          </Text>
          <Text style={(styles.forgotText, styles.help)} onPress={() => navigation.navigate("forget")}>Obtèn ayuda</Text>
        </View>

        <Button
          icon="login"
          style={styles.button}
          mode="contained"
          onPress={() => Login(formData)}>
          <Text style={styles.text}>Iniciar Sesion</Text>
        </Button>       
        

        <View style={styles.forgot}>
          <Text style={styles.forgotText}>
            ¿No tienes cuenta?
          </Text>
          <Text style={(styles.forgotText, styles.help)} onPress={() => navigation.navigate("register")}>Registrate</Text>
        </View>
        
      </View>
    </>
  );
}

//valores del formulario por defecto
function defaultValue(){
  return ({
      password: "",
      username: "",
  })
}

const styles = StyleSheet.create({
  continerTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: -1,
    alignContent: 'center',
  },
  container: {
    padding: '5%',
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 50,
  },
  button: {
    height: 50,
    marginTop: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c853',
    opacity: 0.9,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  forgotText: {
    fontSize: 12,
    padding: 2,
  },
  help: {
    fontWeight: 'bold',
    color: '#1976d2',
    fontSize: 12,
    padding: 2,
  },
  forgot: {
    justifyContent: 'center',
    marginTop: '10%',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
  },
  buttonCont: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonOutline: {
    height: 45,
    width: '100%',
    marginBottom: 3,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    fontSize: 20,
    opacity: 0.7,
  }
});
