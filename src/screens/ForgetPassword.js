import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormForgetPassword from '../components/FormForgetPassword';

export default function ForgetPassword(props) {
  //destructuring de props para obtener el navigation
  const {navigation} = props;
  return (  
    <View style={styles.container}>
         <FormForgetPassword navigation={navigation}/>
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
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center"
    }
});
