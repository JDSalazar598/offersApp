/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { Text, Title, Avatar, Button, Card, Paragraph } from "react-native-paper";
import Carousel from 'react-native-snap-carousel';
import { BASE_PATH_IMG } from '../utils/constants';
import { getGenresMovies } from '../api/movies';
import { map, size } from "lodash";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical(props) {
    const { datos, navigation } = props;

    return (
        <Carousel
            layout={"default"}
            data={datos}
            renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
            sliderWidth={width}
            itemWidth={ITEM_WIDTH}
        />
    );
}


function RenderItem(props) {
    const { data, navigation } = props;
    const { id, title, poster_path, genre_ids } = data.item;
    const [genres, setGenres] = useState(null);
    const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`;

    useEffect(() => {
        getGenresMovies(genre_ids).then((response) => {
            setGenres(response);
        });
    }, []);

    const onNavigation = () => {
        navigation.navigate("movie", { id });
    };

    return (
        <TouchableWithoutFeedback onPress={() => onNavigation()}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: imageUrl }} />
                <Card.Content>
                    <Title numberOfLines={1}    >{title}</Title>
                    <Paragraph>{genres &&
                        map(genres, (name, index) => (
                            <Text numberOfLines={1} key={index} style={styles.genre}>
                                {name}
                                {index !== size(genres) - 1 && ', '}
                            </Text>
                        ))
                    }
                    </Paragraph>
                </Card.Content>
            </Card>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 15
    },
    title: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    generes: {
        flexDirection: 'row',
        marginHorizontal: 2,
    },
    genre: {
        fontSize: 12,
        color: "#8997a5"
    },
})