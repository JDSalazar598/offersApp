import React from 'react';
import {TextInput, Button, Text, Title} from 'react-native-paper';
import {StyleSheet, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default function FormForgetPassword(props) {
  //destructuring de props para obtener navigation
  const {navigation} = props;
  

  return (
    <>
      <View style={styles.continerTitle}>
        <Title style={styles.title}>Recupera tu cuenta</Title>
      </View>
      <View style={styles.containerSubtitle}>        
        <Text>Ingresa tu numero de telefono o email para buscar la cuenta.</Text>        
      </View>
      <View style={styles.container}>
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Email"
          mode="outlined"
        />
    
        <Button
          icon="send"
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>Enviar</Text>
        </Button>       
        

        <View style={styles.forgot}>
          <Text style={styles.forgotText}>
            ¿tienes cuenta?
          </Text>
          <Text style={(styles.forgotText, styles.help)} onPress={() => navigation.navigate("login")}>Inicia sesion</Text>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  continerTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSubtitle: {
    padding: '6%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: "center"
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop:"-5%",
    margin: 10,
    borderRadius: 10,
  },
  input: {
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
