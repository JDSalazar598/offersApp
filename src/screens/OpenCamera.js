import React from 'react';
import { View, StyleSheet } from 'react-native';
import Camera from "../components/Camera";

export default function OpenCamera() {
    return (
        <>
            <View style={styles.container}>
                <Camera/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        width: "100%"
    }
});

