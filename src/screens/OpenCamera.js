import React from 'react';
import {View, StyleSheet} from 'react-native';
import Camera from '../components/Camera';

export default function OpenCamera({navigation}) {
    navigation.setOptions({headerShown: false})
  return (
    <>
      <View style={styles.container}>
        <Camera navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
  },
});
