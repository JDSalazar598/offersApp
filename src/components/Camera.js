import React, {useState} from 'react';
import {Appbar} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

const {width} = Dimensions.get('window');

const ancho = width / 3;

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

export default function Camera({navigation}) {
  const [mode, setMode] = useState(true);

  const showPicker = () => {
    const options = {
      storageOptions: {
        cropping: true,
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('data:image/jpeg;base64,' + response.data);
        navigation.navigate('previewImage', {img: response.data});
      }
    });
  };

  const changeMode = (mode) => {
    console.log(!mode);
    if (mode == true) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 1, base64: true};
      const data = await this.camera.takePictureAsync(options);
      navigation.navigate('previewImage', {img: data.base64});
    }
  };
  return (
    <View style={styles.container}>
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Foto" />
      </Appbar>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        zoom={0.05}
        flashMode={
          mode
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <TouchableOpacity onPress={() => changeMode(mode)} style={styles.flash}>
        {mode ? (
          <IconButton icon="flash" color={Colors.white} size={30} />
        ) : (
          <IconButton icon="flash-outline" color={Colors.white} size={30} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showPicker()} style={styles.image}>
        <IconButton icon="image" color={Colors.white} size={30} />
      </TouchableOpacity>
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          height: '40%',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={styles.capture}>
          <IconButton icon="circle-outline" color={Colors.grey400} size={100} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '60%',
    alignItems: 'center',
  },
  capture: {
    justifyContent: 'center',
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: ancho,
  },
  flash: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#efefef',
    height: '100%',
    width: ancho,
    position: "absolute",
  },
  image: {
    backgroundColor: 'transparent',
    color: '#efefef',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: ancho,
    height: '100%',
    bottom: 0,
    position: "absolute",
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
  },
});
