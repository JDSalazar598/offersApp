/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Appbar,
  Provider,
  Portal,
  Modal,
  Text,
  Button,
  Card,
} from 'react-native-paper';
import {getNewsMoviesApi} from '../api/movies';
import CommunityOffers from '../components/CommunityOffers';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native';

export default function Community({navigation}) {
  const [newsMovies, setNewsMovies] = useState(null);

  const [visible, setVisible] = React.useState(false);
  //funcion utilizada para detectar el movimiento del scroll
  const ScrollMove = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - (this.offset || 0);
    if (dif < 2) {
      navigation.setOptions({ tabBarVisible: true });
    } else{
      navigation.setOptions({ tabBarVisible: false });
    }
  
    console.log('dif=', dif);

    this.offset = currentOffset;
  };
  //funciones para mostrar y ocultar modal
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  useEffect(() => {
    getNewsMoviesApi().then((response) => {
      setNewsMovies(response.results);
    });
  }, []);

  return (
    <>
      <Appbar.Header style={styles.shadow}>
        <Appbar.Content title="Comunidad" />
        <Appbar.Action
          icon="camera"
          onPress={() => navigation.navigate('cameraStack')}
        />
      </Appbar.Header>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => ScrollMove(e)}>
        {newsMovies && (
          <CommunityOffers data={newsMovies} navigation={navigation} />
        )}
      </ScrollView>
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal}>
            <Card style={styles.card}>
              <Card.Content>
                <Text>Mostrando Modal</Text>
              </Card.Content>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  news: {
    marginVertical: '2%',
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 22,
  },
  genres: {
    marginTop: 15,
    marginBottom: 50,
  },
  title: {
    marginHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 22,
  },
  genreList: {
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    padding: 5,
  },
  genre: {
    marginRight: 15,
    fontSize: 16,
  },

  shadow: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  card: {
    height: '50%',
    backgroundColor: '#fff',
    padding: '5%',
    margin: 10,
  },
});
