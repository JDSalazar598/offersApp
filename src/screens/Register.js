import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegisterForm from '../components/RegisterForm';

export default function Register(props) {
  //destructuring de props para obtener navigation
  const {navigation} = props;
  return (  
    <View style={styles.container}>
         <RegisterForm navigation={navigation}/>
    </View>
  );
}
const styles = StyleSheet.create({
    header: {
        height: "35%",
        width: "100%",
        backgroundColor: "#00838f",
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center"
    }
});
