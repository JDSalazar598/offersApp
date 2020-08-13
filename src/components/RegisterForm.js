import React from 'react';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';


export default function RegisterForm() {
    return (
        <>
        <View style={styles.continerTitle}>
            <Title style={styles.title}>
                Sing In
            </Title>
        </View>
        <View style={styles.container}>
            <TextInput
                theme={{ colors: { primary: '#087f23',underlineColor:'transparent'}}}
                style={styles.input}
                label="Usuario"
                mode='outlined'
            />
            <TextInput
                theme={{ colors: { primary: '#087f23',underlineColor:'transparent',}}}
                style={styles.input}
                label="Email"
                mode='outlined'
            />
            <TextInput
                theme={{ colors: { primary: '#087f23',underlineColor:'transparent',}}}
                style={styles.input}
                label="Email"
                mode='outlined'
            />
            <Button icon="camera" style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                <Text style={styles.text}>Sign In</Text>
            </Button>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    continerTitle: {
        marginTop: "5%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        padding: "2%",
        backgroundColor: "#fff",
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
    },
    input: {
        marginTop: 5,
        backgroundColor: "#fff"
    },
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#087f23"
    },
    text: {
        fontSize: 16,
        color:"#fff"
    }
});
