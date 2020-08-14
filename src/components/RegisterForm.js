import React from 'react';
import {TextInput, Button, Text, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

export default function RegisterForm(props) {
  //destructuring de props para obtener navigation
  const {navigation} = props;
  return (
    <>
      <View style={styles.continerTitle}>
        <Title style={styles.title}>Registrate</Title>
      </View>
      <View style={styles.containerSubtitle}>
        <Text>
          Registra y comparte ofertas con nuestra comunidad.
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Usuario"
          mode="outlined"
        />
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Password"
          mode="outlined"
        />
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Email"
          mode="outlined"
        />
        <TextInput
          theme={{colors: {primary: '#000', underlineColor: 'transparent'}}}
          style={styles.input}
          label="Telefono"
          mode="outlined"
        />
        <Button
          icon="send"
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>Registrate</Text>
        </Button>
        <View style={styles.forgot}>
          <Text style={styles.forgotText}>¿Tienes una cuenta?</Text>
          <Text
            style={(styles.forgotText, styles.help)}
            onPress={() => navigation.navigate('login')}>
            Inicia Sesion
          </Text>
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
    padding: '5%',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: -1,
    alignContent: 'center',
  },
  container: {
    padding: '2%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: "-5%",
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
  },
  keycontainer: {
    flex: 1,
    zIndex: 100000,
  },
});
