import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screen/DetailsScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams = {
    HomeScreen: undefined;
    DetailsScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    // backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
    );
}