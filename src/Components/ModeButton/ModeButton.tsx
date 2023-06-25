import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

interface ModeProps {
    modeBtnName?: string;
    modeBtnStyle?: StyleProp<ViewStyle>;
    modeContainerBtnStyle?: StyleProp<ViewStyle>;
    modeTextStyle?: StyleProp<TextStyle>;
    action: () => void;
}

export const ModeButton = ({ modeBtnName, action,modeContainerBtnStyle, modeBtnStyle, modeTextStyle }: ModeProps): JSX.Element => {
    return (
        <View
            style={modeContainerBtnStyle}
        >
            <TouchableOpacity
                style={[styles.btn, modeBtnStyle]}
                onPress={action}
            >
                <Text style={[styles.textBtn, modeTextStyle]}>{modeBtnName} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    btn: {
        height: 40,
        width: 40,
        backgroundColor: '#5F79B5',
        borderRadius: 10,
        justifyContent: 'center',
        // marginHorizontal: 4
    },
    textBtn: {
        color: '#fff',
        textAlign: 'center'
    }
});