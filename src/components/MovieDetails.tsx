import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterfaces';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { ActorItem } from './ActorItem';
import { FlatList } from 'react-native-gesture-handler';



interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginTop: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    {/* grading */}
                    <Icon name="star" size={16} color="grey" />
                    <Text style={{ marginLeft: 5 }}>{movieFull.vote_average.toFixed(1)}</Text>

                    {/* genres */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={{ marginLeft: 4 }}>
                            - {movieFull.genres.map(g => g.name).join(', ')}
                        </Text>
                    </View>
                </View>

                {/* History */}
                <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold', color: 'black' }}>
                    Plot
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>

                {/* Budget */}
                <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold', color: 'black' }}>
                    Budget
                </Text>
                <Text>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View >

            {/* Casting */}
            <View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold', color: 'black' }}>
                        Actors
                    </Text>
                </View>

                <View style={{ marginBottom: 30, height: 100 }}>
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ActorItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            paddingLeft: 20,
                            height: 100,
                            paddingTop: 5
                        }}
                    />
                </View>
            </View >
        </>
    )
}
