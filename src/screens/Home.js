/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, RefreshControl} from 'react-native';
import { Appbar, Title } from 'react-native-paper';
import { getNewsMoviesApi, getAllGenres, getMoviesForGenres } from '../api/movies';
import CarouselVertical from '../components/CarouselVertical';
import { map } from "lodash";
import CarouselMulti from "../components/CarouselMulti";
import Navigation from "../navigation/Navigation";


export default function Home(props) {
    const { navigation, route} = props;


    const { colorTab } = navigation;
    const [newsMovies, setNewsMovies] = useState(null);
    const [genreList, setGenreList] = useState([]);
    const [genreSelected, setGenreSelected] = useState(28);
    const [genreMovies, setGenreMovies] = useState(null);

    useEffect(() => {
        getNewsMoviesApi().then((response) => {
            setNewsMovies(response.results);
        })
    }, []);

    useEffect(() => {
        getAllGenres().then((response) => {
            setGenreList(response.genres);
        });
    }, []);

    useEffect(() => {
        getMoviesForGenres(genreSelected).then((response) => {
            setGenreMovies(response.results);
        })
    }, [genreSelected])

    const onChangeGenre = (genreId) => {
        setGenreSelected(genreId);
    };

    //funcion utilizada para detectar el movimiento del scroll
    const ScrollMove = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const dif = currentOffset - (this.offset || 0);  
    
        if (dif < 2) {
          navigation.setOptions({ tabBarVisible: true });
        } else{
          navigation.setOptions({ tabBarVisible: false });
        }
        console.log('dif=',dif);
    
        this.offset = currentOffset;
    }

    return (
        <>
            <Appbar.Header style={styles.shadow}>
                <Appbar.Content title="Home" />
            </Appbar.Header>

            <ScrollView showsVerticalScrollIndicator={false}   onScroll={(e) =>  ScrollMove(e)} >
                {newsMovies && (
                    <View style={styles.news}>
                        <Title style={styles.newsTitle}>Ofertas Especiales</Title>
                        <CarouselVertical datos={newsMovies} navigation={navigation} />
                    </View>
                )}

                <View style={styles.genres}>
                    <Title style={styles.title}>Categorias </Title>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genreList}>
                        {map(genreList, (genre) => (
                            <Text
                                style={
                                    [styles.genre,
                                    { color: genre.id !== genreSelected ? "#8697a5" : "#00897b" },
                                    { borderBottomColor: genre.id !== genreSelected ? "#8697a5" : "#00897b" },
                                    { borderBottomWidth: 2 }
                                    ]}
                                key={genre.id}
                                onPress={() => onChangeGenre(genre.id)}
                            >
                                {genre.name}
                            </Text>
                        ))}
                    </ScrollView>
                    {genreMovies && (
                        <CarouselMulti data={genreMovies} navigation={navigation} />
                    )}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    news: {
        marginVertical: "2%"
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
        fontWeight: "bold",
        fontSize: 22,
    },
    genreList: {
        marginTop: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        padding: 5
    },
    genre: {
        marginRight: 15,
        fontSize: 16,
    },
    shadow: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    }
})