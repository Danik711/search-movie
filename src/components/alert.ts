import { Alert } from "react-native";

export default function alert(title: string, message: string, onPress?: () => void) {
    Alert.alert(
        title,
        message,
        [
            {
                text: "OK",
                onPress: () => onPress ? onPress() : { }
            }
        ]
    );
}