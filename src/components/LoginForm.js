import React from 'react';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';


const { width } = Dimensions.get("window");

export default function LoginForm() {
    return (
        <>
            <View style={styles.continerTitle}>
                <Title style={styles.title}>
                    Offers App
                 </Title>
            </View>
            <View style={styles.container}>
                <TextInput
                    theme={{ colors: { primary: '#087f23', underlineColor: 'transparent' } }}
                    style={styles.input}
                    label="Email"
                    mode='outlined'
                />
                <TextInput
                    theme={{ colors: { primary: '#087f23', underlineColor: 'transparent', } }}
                    style={styles.input}
                    label="Password"
                    secureTextEntry={true}
                    mode='outlined'
                />
                <View style={styles.forgot}>
                    <Text>
                        Olvidaste tu contraseña?
                     </Text>
                </View>

                <View style={styles.buttonCont}> 
                    <Button icon="facebook" mode="contained" color="blue" style={styles.buttonOutline} onPress={() => console.log('Pressed')}>
                        Continuar con Facebook
                    </Button> 
                    <Button icon="google" mode="contained" color="#eeeeee" style={styles.buttonOutline}  onPress={() => console.log('Pressed')}>
                        Continuar con Google
                    </Button>
                </View>

                <View style={styles.forgot}>
                    <Text>
                     </Text>
                </View>
                
                <Button icon="login" style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={styles.text}>Iniciar Sesion</Text>
                </Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    continerTitle: {
        marginTop: "10%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
        zIndex: 10000
    },
    container: {
        padding: "2%",
        backgroundColor: "#fff",
        justifyContent: 'center',
        margin: 10,
        marginTop: "3%",
        borderRadius: 10,
    },
    input: {
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    button: {
        height: 50,
        marginTop: "25%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#00838f"
    },
    text: {
        fontSize: 16,
        color: "#fff"
    },
    forgot: {
        justifyContent: "center",
        alignContent: "center",
        marginTop: "10%",
        width: "100%",
        height: "10%",
        flexDirection: "row",
    },
    buttonCont: {
        flex: 1,
        flexDirection: "column"
    },
    buttonOutline: {
        height: 50,
        width: "100%",
        marginBottom: 3,
        marginTop: 5,
        borderRadius: 10,
        justifyContent: 'center',
        fontSize: 20
    }
});
