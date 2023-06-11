import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

interface KeyButtonProps {
    row?: string[];
    strBuilder: string;
    toCap?: boolean;
    keyPress: (pressed: string) => void;
}

const appendChar = (capState: boolean, strBuilder: string, keyChar: string): string => {
    if (capState) {
        return strBuilder + keyChar.toLocaleUpperCase()
    }
    return strBuilder + keyChar
}

export const KeyButton = ({ row, strBuilder, toCap = false, keyPress }: KeyButtonProps): JSX.Element => {

    const { width } = useWindowDimensions()

    return (
        <View style={styles.row}>
            {
                row?.map((key) => {
                    return (
                        <TouchableOpacity
                            key={key}
                            style={{ ...styles.button, width: width * 0.08 }}
                            // onPress={() => keyPress && keyPress(strBuilder + key)} // check if exist before call when you add ? optional on props
                            onPress={() => keyPress(appendChar(toCap, strBuilder, key))}
                        >
                            <Text style={styles.text}> {toCap === true ? key.toLocaleUpperCase() : key} </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        margin: 2,
        height: 40,
        width: 10,
        backgroundColor: '#5F79B5',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 4
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        color: '#fff'
    }
});