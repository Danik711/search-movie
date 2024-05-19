import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { colors } from "../../assets/colors";
import { app_dimensions } from "../../assets/dimensions";
import { textStyles } from "../../assets/texts";

type MovieItemType = {
    year: number;
    photo: string;
    title: string;
    actors: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle> 
};

export default function MovieItem({ onPress, photo, title, year, actors, containerStyle}: MovieItemType) {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.mainWrapper, containerStyle]}
        >
            <FastImage 
                source={{ uri: photo }}
                style={styles.imageStyle}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View
                style={styles.dataWrapper}
            >
                <Text
                    style={[textStyles.button_14, { color: colors.neutralBlack, marginBottom: app_dimensions.dim4 }]}
                >
                    {title}
                </Text>
                <Text
                    style={[textStyles.p4_12, { color: colors.neutral3 }]}
                >
                    {year}
                </Text>
                <Text
                    style={[textStyles.p4_12, { color: colors.neutral3 }]}
                >
                    {actors}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral5,
        paddingVertical: app_dimensions.dim4,
    },
    imageStyle: {
        width: 80,
        height: 100,
    },
    dataWrapper: {
        flex: 1,
        flexDirection: "column",
        marginStart: app_dimensions.dim12,
    }
});