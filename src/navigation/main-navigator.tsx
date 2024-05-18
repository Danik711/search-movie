import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import MoviesStackNavigator from "./movies-navigator";

export default function MainAppNavigator() {
    return (
        <NavigationContainer>
            <MoviesStackNavigator />
        </NavigationContainer>
    );
}