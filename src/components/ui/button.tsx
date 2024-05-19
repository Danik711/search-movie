import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, TextStyle, ActivityIndicator } from "react-native";

// styles
import { colors } from "../../../assets/colors";
import { textStyles } from "../../../assets/texts";
import { app_dimensions } from "../../../assets/dimensions";

type ButtonType = {
    buttonText: string;
    disabled?: boolean;
    isLoading?: boolean;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void);
};

export default function Button({ buttonText, buttonStyle, textStyle, isLoading, disabled, onPress }: ButtonType) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={1.0}
            style={[styles.buttonStyle, { backgroundColor: disabled ? colors.neutral5 : colors.primaryHundred } ,buttonStyle]}
        >
            {
                isLoading ?
                <ActivityIndicator 
                    size={"small"}
                    color={colors.primaryHundred}
                />
                :
                <Text
                    style={[textStyles.button_16, { color: disabled ? colors.neutral1 : colors.neutralWhite }, textStyle]}
                >
                    {buttonText}
                </Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: app_dimensions.dim12,
        paddingVertical: app_dimensions.dim16,
    }
});