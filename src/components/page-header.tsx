import { ReactNode } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet, View, Text, Pressable, GestureResponderEvent, ViewStyle, StyleProp } from "react-native";

import { colors } from "../../assets/colors";
import { textStyles } from "../../assets/texts";
import { app_dimensions } from "../../assets/dimensions";

// icons
import Close from "../../assets/icons/close";
import BackButton from "../../assets/icons/back-button";

type PageHeaderType = {
    title: string;
    showCloseIcon?: boolean;
    showBackButton?: boolean;
    showHorizontalLine?: boolean;
    headerStyle?: StyleProp<ViewStyle>;
    onRightIconPress?: (event: GestureResponderEvent) => void;
    onBackButtonPress?: (event: GestureResponderEvent) => void;
};

export default function PageHeader({ title, onBackButtonPress, showBackButton = true, showCloseIcon = false, 
    headerStyle, showHorizontalLine = true, onRightIconPress }: PageHeaderType) {
    return (
        <View style={styles.mainWrapper}>
            <View
                style={[styles.innerWrapper, headerStyle]}
            >
                <View style={styles.titleBackBtnWrapper}>
                    {
                        showBackButton &&
                        <Pressable
                            onPress={onBackButtonPress}
                            style={styles.backButtonWrapper}
                        >
                            {
                                showCloseIcon ?
                                <Close color={colors.neutralBlack} />
                                :
                                <BackButton />
                            }
                        </Pressable>
                    }
                    <Text
                        style={[textStyles.h4_18, { marginStart: showBackButton ? app_dimensions.dim8 : 0, color: colors.neutralBlack }]}
                    >
                        {title}
                    </Text>
                </View>
            </View>

            {/* Horizontal Line */}
            {
                showHorizontalLine &&
                <View style={styles.horizontalLine} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: wp("100%"),
        flexDirection: "column",
    },
    backButtonWrapper: {
        paddingRight: app_dimensions.dim8,
        paddingVertical: app_dimensions.dim8
    },
    innerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: app_dimensions.dim12,
        marginHorizontal: app_dimensions.dim16,
    },
    titleBackBtnWrapper: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    rightIconsWRapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    horizontalLine: {
        height: 1,
        width: "100%",
        backgroundColor: colors.neutral5
    }
});
