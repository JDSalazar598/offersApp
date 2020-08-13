import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <>
            <View style={styles.header}>

            </View>
            <View style={styles.container}>
                <LoginForm/>
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
        minHeight: "90%",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "#fff",
        marginTop: "-50%",
        zIndex: 10000,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 6
    }
});

