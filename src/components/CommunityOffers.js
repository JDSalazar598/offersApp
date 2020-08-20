import React from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {Card, IconButton, Colors, Avatar} from 'react-native-paper';
import {BASE_PATH_IMG} from '../utils/constants';
import {map} from 'lodash';

//obtener ancho de pantalla automaticamente
const {width} = Dimensions.get('window');

export default function CommunityOffers(props) {
  //destructuring de props
  const {data, navigation} = props;
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {map(data, (item, index) => (
        <RenderItem key={index} data={item} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  const {id, title, poster_path} = data;
  const imageUrl = `${BASE_PATH_IMG}/w500/${poster_path}`;

  const onNavigation = () => {
    navigation.navigate('movie', {id});
  };
  const LeftContent = () => <IconButton icon="dots-vertical" />;
  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.cardContainer}>
        <Card style={[styles.card, styles.title]}>
          <Card.Title
            title={title}
            subtitle="publicado el 18/08/2020"
            right={LeftContent}
          />
          <Card.Cover style={styles.image} source={{uri: imageUrl}} />
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
              onPress={() => navigation.navigate('openMap')}
            />
            <IconButton
              icon="share-outline"
              color={Colors.black}
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </Card.Actions>

          <Card.Content style={styles.textContent}>
            <Text style={styles.textBold} numberOfLines={1}>
              Cemaco
            </Text>
            <Text style={styles.textNormal} numberOfLines={1}>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
            </Text>
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
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: width,
  },
  card: {
    margin: 5,
    padding: 2,
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
