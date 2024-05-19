import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

//styles
import { colors } from "../../assets/colors";
import { textStyles } from "../../assets/texts";
import { app_dimensions } from "../../assets/dimensions";

type LoadingDataType = {
    text: string;
}

export default function LoadingData({ text }: LoadingDataType) {
    return (
        <View
            style={styles.emptyMoviesWrapper}
        >
            <Text
                style={[textStyles.h4_18, styles.textStyle]}
            >
                {text}
            </Text>
            <ActivityIndicator 
                size={"large"}
                color={colors.primaryHundred}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    emptyMoviesWrapper: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    textStyle: { 
        textAlign: "center", 
        color: colors.neutralBlack, 
        marginBottom: app_dimensions.dim8, 
    }
});