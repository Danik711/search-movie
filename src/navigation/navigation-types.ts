import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";

// pages names
import { MOVIES_HOME_SCREEN, MOVIE_DETAILS_SCREEN } from "./page-names";

export type MoviesStackParamList = {
    [MOVIES_HOME_SCREEN]: undefined;
    [MOVIE_DETAILS_SCREEN]: { imdb_id: string };
};

export type MoviesHomeScreenNavType = NativeStackScreenProps<MoviesStackParamList, "MoviesHome">;
export type MovieDetailScreenNavType = NativeStackScreenProps<MoviesStackParamList, "MovieDetails">;