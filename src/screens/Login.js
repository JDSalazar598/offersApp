import React from 'react';
import {View, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import LoginForm from '../components/LoginForm';
import {Text} from 'react-native-paper';

export default function Login(props) {
  //destructuring de props
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Login</Text>
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    position: 'absolute',
  },
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
