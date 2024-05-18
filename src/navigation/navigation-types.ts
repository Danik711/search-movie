import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";

// pages names
import { MOVIES_HOME_SCREEN } from "./page-names";

export type MoviesStackParamList = {
    [MOVIES_HOME_SCREEN]: undefined;
};

export type MoviesHomeScreenNavType = NativeStackScreenProps<MoviesStackParamList, "MoviesHome">;