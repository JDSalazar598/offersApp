import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from "../components/LoginForm";

export default function Login(props) {
    //destructuring de props
    const {navigation} = props;



    return (
        <>
            <View style={styles.container}>
                <LoginForm navigation={navigation}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "35%",
        width: "100%",
        backgroundColor: "#00838f",
    },
    container: {
        minHeight: "95%",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "#fff",
        justifyContent: "center",
        marginTop: "5%",
    }
});

