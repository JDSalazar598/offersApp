/* eslint-disable prettier/prettier */
import React from 'react';
import { List, Colors, Appbar, TouchableRipple } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';

export default function Configuration(props) {

    const {navigation} = props;

    return (
        <>
            <ScrollView backgroundColor="#fafafa">
                <TouchableRipple
                    rippleColor="rgba(0, 0, 0, .20)"
                    onPress={() => navigation.navigate("login")}
                >
                    <List.Item
                        title="Crear cuenta"
                        description="Crea tu cuenta o inicia sesion"
                        left={props => <List.Icon {...props} icon="account" color={Colors.black} style={styles.icon} />}
                    />
                </TouchableRipple>

                <TouchableRipple
                    rippleColor="rgba(0, 0, 0, .20)"
                    onPress={() => console.log('Pressed')}
                >
                    <List.Item
                        title="Configurar Notificaciones"
                        description="Configura como quieres recibir notificaciones"
                        left={props => <List.Icon {...props} icon="bell" color={Colors.black} style={styles.icon} />}
                    />
                </TouchableRipple>
                <TouchableRipple
                    rippleColor="rgba(0, 0, 0, .20)"
                    onPress={() => console.log('Pressed')}
                >
                    <List.Item
                        title="Ubicacion"
                        description="Actualiza tu ubicacion para estar enterado de las ofertas que tienes cerca"
                        left={props => <List.Icon {...props} icon="map-marker" color={Colors.black} style={styles.icon} />}
                    />
                </TouchableRipple>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    icon: {
        paddingRight: 2
    }
});