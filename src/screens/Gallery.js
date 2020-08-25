import React, {useEffect, useState} from 'react';
import {Card, IconButton, Colors, Avatar, Title} from 'react-native-paper';
import {
  View,
  Image,
  ScrollView,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {map} from 'lodash';
import CameraRoll from '@react-native-community/cameraroll';

const {width} = Dimensions.get('window');

export default function Gallery(props) {
  //destructuring de props
  const {navigation} = props;

  //useState para almacenar el arreglo de imagenes
  const [data, setData] = useState([]);
  useEffect(() => {
    if (requestPermissions()) getPhotos();
  }, []);

  async function requestPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'This App needs to Access your photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
        alert('Permission Denied');
      }
    } catch (err) {
      alert('err', err);
      console.warn(err);
    }
  }

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Photos',
    })
      .then((res) => {
        setData(res.edges);
        console.log(res.edges.node.image.uri);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {map(data, (item, index) => (
        <RenderItem key={index} data={item} />
      ))}
    </ScrollView>
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  const {node} = data;
  console.log(node);

  const onNavigation = () => {
    navigation.navigate('movie', {id});
  };
  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.cardContainer}>
        <Card style={[styles.card, styles.title]}>
          <Card.Title
            subtitle="publicado el 18/08/2020"
          />
          <Card.Cover style={styles.image} source={{uri: node.image.uri}} />
          <Card.Actions>
            <IconButton
              icon="star-outline"
              color={Colors.black}
              size={25}
              onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon="map-marker-outline"
              color={Colors.black}
              size={25}
              onPress={() => navigation.navigate('OpenMap')}
            />
            <IconButton
              icon="share-outline"
              color={Colors.black}
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </Card.Actions>

          <Card.Content style={styles.textContent}>
           
          </Card.Content>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  cardContainer: {
    width: width/3,
  },
  card: {
    margin: 0,
  },
  movie: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 250,
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textContent: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginTop: '-3%',
    paddingBottom: 20,
  },
  textBold: {
    fontWeight: 'bold',
    padding: 2,
  },
  textNormal: {
    padding: 2,
  },
  title: {
    fontSize: 12,
  },
});
