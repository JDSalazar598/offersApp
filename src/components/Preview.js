import React from 'react';
import {View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button, Colors} from 'react-native-paper';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Preview(props) {
  const {img} = props;
  return (
    <>
      <View style={styles.container}>
        
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: `data:image/jpg;base64,${img}`}}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1, 
            position: 'absolute',
          }}>
          <View
            style={{
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              width: '100%',
              height: '140%',
              flexDirection: 'row',
              opacity: 0.9,
              alignSelf: 'flex-end',
              backgroundColor: 'black',
              flex: 1, 
            }}>
            <TextInput
              theme={{
                colors: {
                  primary: 'transparent',
                  placeholder: 'white',
                  text: 'white',
                },
              }}
              style={styles.input}
              label=""
              placeholder="Comentario"
              mode="flat"
            />
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => console.log('subiendo foto')}>
              <MaterialCommunityIcons
                name="send"
                color={Colors.white}
                size={26}
              />
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },

  input: {
    flexDirection: 'row',
    marginLeft: 4,
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: 'white',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    alignSelf: 'flex-start',
    flex: 1, 
  },
  button: {
    marginTop: '-8%',
    marginRight: 10,
    height: 60,
    borderRadius: 60,
    alignSelf: 'flex-start',
    backgroundColor: '#00c853',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
});
