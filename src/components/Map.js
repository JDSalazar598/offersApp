import React, {useEffect, useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';

export default function Map() {
  //obtener ancho de pantalla automaticamente
  const {width, height} = Dimensions.get('window');
  const aspect = width / height;

  const [location, setLocation] = useState({
    latitude: 14.6263757,
    longitude: -90.5626011,
    latDelta: aspect,
    longDelta: aspect,
  });
  useEffect(() => {
    requestPermissions();
  }, []);

  async function requestPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        alert('Permission Denied');
      }
    } catch (err) {
      alert('err', err);
      console.warn(err);
    }
  }
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude: latitude,
          longitude: longitude,
          latDelta: aspect,
          longDelta: aspect,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const GOOGLE_API_KEY = "AIzaSyBejpeSdGVembJJE1HjYtpCOg7lcYTJREg";

  console.log(location.latitude + ' ' + location.longitude);
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Test Title"
        description="This is the test description">
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>ORIGEN</Text>
              <Text>A short description</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: 14.5315735,
          longitude: -90.4713461,
        }}
        title="DESTINO"
        description="This is the test description">
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>DESTINO</Text>
              <Text>A short description</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
      <MapViewDirections
        origin={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        destination={{
          latitude: 14.5315735,
          longitude: -90.4713461,
        }}
        strokeWidth={4}
        mode="DRIVING"
        optimizeWaypoints={true}
        strokeColor="hotpink"
        apikey={GOOGLE_API_KEY}
      />
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: '100%',
    height: 80,
  },
});
