import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';

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
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      navigation.navigate("previewImage", {img: data.base64});
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
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
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
          >
          <IconButton icon="close" color={Colors.white} size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={styles.capture}>
          <IconButton icon="circle-slice-8" color={Colors.white} size={90} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  back: {
    flex: 0,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    margin: 20,
  },
});
