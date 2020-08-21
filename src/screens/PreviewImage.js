import React from 'react';
import {View, Text} from 'react-native';
import Preview from '../components/Preview';
import {StyleSheet} from 'react-native';

export default function PreviewImage(props) {
  const {route, navigation} = props;
  
  navigation.setOptions({headerShown: true})
  const data = route.params.img;
  return (
    <View>
      <Preview img={data} />
    </View>
  );
}

