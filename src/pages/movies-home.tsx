import { StyleSheet, Text, SafeAreaView } from "react-native";

// types
import { MoviesHomeScreenNavType } from "../navigation/navigation-types";

export default function MoviesHomeScreen({ navigation }: MoviesHomeScreenNavType) {
    return (
        <SafeAreaView
            style={styles.mainWrapper}
        >
            <Text>
                Movies Screen
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: "white"
    }
});