import { createNativeStackNavigator } from "@react-navigation/native-stack"

// types
import { MoviesStackParamList } from "./navigation-types";

// pages' names
import { MOVIES_HOME_SCREEN, MOVIE_DETAILS_SCREEN } from "./page-names";

// components
import MovieDetails from "../pages/movie-details";
import MoviesHomeScreen from "../pages/movies-home";

const { Screen, Navigator } = createNativeStackNavigator<MoviesStackParamList>();

export default function MoviesStackNavigator() {
    return (
        <Navigator
            initialRouteName={MOVIES_HOME_SCREEN}
        >
            <Screen 
                name={MOVIES_HOME_SCREEN}
                component={MoviesHomeScreen}
                options={{ headerShown: false }}
            />
            <Screen 
                component={MovieDetails}
                name={MOVIE_DETAILS_SCREEN}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}