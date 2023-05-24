import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import { HorizontalSlider } from "../components/HorizontalSlider";

const { width: windWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();



    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top, }}>
                <View style={{ height: 510, backgroundColor: 'transparent', marginBottom: 5 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MovieCard movie={item} />}
                        sliderWidth={windWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.8}
                    />
                </View>

                <HorizontalSlider
                    title="Popular"
                    movies={popular}
                />
                <HorizontalSlider
                    title="Top Rated"
                    movies={topRated}
                />
                <HorizontalSlider
                    title="Upcoming"
                    movies={upcoming}
                />
                
            </View>
        </ScrollView>
    )
}
