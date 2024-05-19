import FastImage from "react-native-fast-image";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

// types
import { ActorDetail } from "../helpers/types";

// styles
import { textStyles } from "../../assets/texts";
import { app_dimensions } from "../../assets/dimensions";
import { colors } from "../../assets/colors";

type ActorViewType = {
    containerStyle?: StyleProp<ViewStyle>;
}

export default function ActorView({ name, photo, containerStyle }: ActorDetail & ActorViewType) {
   const splitName = name.split(" ");

    return (
        <View
            style={[styles.mainWrapper, containerStyle]}
        >
            <View
                style={styles.photoStyle}
            >
                <Text
                    style={[textStyles.button_16, { color: colors.neutral2 }]}
                >
                    {splitName[0][0]}{splitName[1][0]}
                </Text>
            </View>

            <Text
                style={[textStyles.button_14, styles.nameStyle]}
            >
                {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flexDirection: "row"
    },
    photoStyle: {
        width: 60,
        height: 60,
        borderRadius: 9999,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.neutral5
    },
    nameStyle: {
        alignSelf: "flex-start",
        marginTop: app_dimensions.dim8,
        marginStart: app_dimensions.dim8
    }
});