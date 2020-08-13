import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableWithoutFeedback
} from "react-native";
import { Title, Text, Card } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { BASE_PATH_IMG } from "../utils/constants";
import { ScrollView } from 'react-native';
import { map } from 'lodash';

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Math.round(width * 0.3);

export default function CarouselMulti(props) {
    const { data, navigation } = props;
    return (
        <ScrollView >
            <View style={styles.container}>
                {map(data, (item, index) => (
                    <RenderItem key={index} data={item} navigation={navigation} />
                ))}
            </View>
        </ScrollView>
    )
}

function RenderItem(props) {
    console.log(props);
    const { data, navigation } = props;
    const { id, title, poster_path } = data;
    const imageUrl = `${BASE_PATH_IMG}/w500/${poster_path}`;

    const onNavigation = () => {
        navigation.navigate("movie", { id });
    }

    return (        
        <TouchableWithoutFeedback  onPress={onNavigation}>
            <View style={styles.cardContainer}>                
            <Card style={styles.card}>
                <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
                <Card.Content style={styles.movie}>
                    <Text styles={styles.titles} numberOfLines={1}>
                        {title}
                    </Text>
                </Card.Content>
            </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cardContainer: {
        width: width / 2,
    },
    card: {
        margin: 3,
        backgroundColor: "#fff"
    },
    movie: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
    }
})