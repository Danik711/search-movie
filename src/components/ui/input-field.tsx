import { ReactNode } from "react";
import { KeyboardTypeOptions, NativeSyntheticEvent, Platform, Pressable, ReturnKeyTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextInputSubmitEditingEventData, View, ViewStyle } from "react-native";

// styles
import { colors } from "../../../assets/colors";
import { textStyles } from "../../../assets/texts";
import { app_dimensions } from "../../../assets/dimensions";

type InputFieldType = {
    lable?: string;
    value?: string;
    maxLength?: number;
    editable?: boolean;
    placeholder?: string;
    rightIcon?: ReactNode;
    errorMessage?: string;
    onRightIconPress?: () => void;
    inputStyle?: StyleProp<ViewStyle>;
    keyboardType?: KeyboardTypeOptions;
    returnKeyType?: ReturnKeyTypeOptions;
    onChangeText?: (text: string) => void;
    inputWrapperStyle?: StyleProp<ViewStyle>;
    inputMainWrapperStyle?: StyleProp<ViewStyle>;
    onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
};

export default function InputField({ lable, value, maxLength, errorMessage, onChangeText, onRightIconPress, onSubmit, keyboardType, returnKeyType, editable = true, inputStyle, placeholder, inputWrapperStyle, inputMainWrapperStyle, rightIcon }: InputFieldType) {
    return (
        <View
            style={[styles.mainWrapper, inputMainWrapperStyle]}
        >
            {
                lable &&
                <Text
                    style={[textStyles.button_14, styles.labelStyle]}
                >
                    {lable}
                </Text>
            }
            <View
                style={[styles.inputWrapperStyle, inputWrapperStyle, 
                    {   borderWidth: errorMessage ? 1 : 0, 
                        borderColor: errorMessage ? colors.systemError : colors.transparent }]}
            >
                <TextInput 
                    value={value}
                    editable={editable}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    onSubmitEditing={onSubmit}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    returnKeyType={returnKeyType}
                    style={[styles.inputStyle, inputStyle]}
                    placeholderTextColor={errorMessage ? colors.neutralBlack : colors.neutral3}
                />

                {
                    rightIcon &&
                    <Pressable
                        onPress={onRightIconPress}
                        style={styles.iconWrapper}
                    >
                        {rightIcon}
                    </Pressable>
                }
            </View>
            {
                errorMessage &&
                <Text
                    style={[textStyles.p4_12, styles.errorMessageStyle]}
                >
                    {errorMessage}
                </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 0,
        flexDirection: "column"
    },
    labelStyle: {
        color: colors.neutralBlack,
        marginBottom: app_dimensions.dim6
    },
    inputWrapperStyle: {
        flexDirection: "row",
        backgroundColor: colors.neutral6,
        borderRadius: app_dimensions.dim12,
        paddingHorizontal: app_dimensions.dim16,
        paddingVertical: Platform.OS === "android" ? 0 : app_dimensions.dim16
    },
    inputStyle: {
        flex: 1,
        color: colors.neutralBlack
    },
    errorMessageStyle: {
        color: colors.systemError,
        marginTop: app_dimensions.dim6
    },
    iconWrapper: {
        alignSelf: "center"
    }
});