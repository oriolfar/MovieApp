import React from 'react'
import { Movie } from '../interfaces/movieInterfaces';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MovieCard } from './MovieCard';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ movies, title }: Props) => {
    return (
        <View style={{
            height: (title) ? 280 : 250,
            marginTop: (title) ? 0 : -15,
            backgroundColor: 'transparent',
        }}>
            {
                title &&
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'black',
                        marginHorizontal: 15,
                        marginBottom: -20
                    }}
                >
                    {title}
                </Text>
            }
            <FlatList

                data={movies}
                renderItem={({ item }: any) => (
                    <MovieCard movie={item} width={150} height={220} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>

    )
}