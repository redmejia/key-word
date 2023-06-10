import { View, Text, StyleSheet, TouchableOpacity, TextInput, TextInputFocusEventData, NativeSyntheticEvent } from "react-native";
import { KeyButton } from "../Components/KeyButton/keyButton";
import { useState } from "react";
import { TextBox } from "../Components/TextBox/TextBox";

export const KeyWord = (): JSX.Element => {


    const [key, setKey] = useState("")

    const rows: string[][] = [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ","],
        ["z", "x", "c", "v", "b", "n", "m", "."],
        ["-", "+", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"],
    ]

    const deleteButon = (): void => {
        if (key.length > 1) {
            setKey(key.slice(0, -1))
        } else {
            setKey("");
        }
    }

    return (
        <View style={styles.container}>
            <TextBox
                text={key}
            />
            <View style={styles.row}>
                <KeyButton row={rows[0]} strBuilder={key} keyPress={setKey} />
            </View>
            <View style={styles.row}>
                <KeyButton row={rows[1]} strBuilder={key} keyPress={setKey} />
            </View>
            <View style={styles.row}>
                <KeyButton row={rows[2]} strBuilder={key} keyPress={setKey} />
            </View>
            <View style={styles.row}>
                <KeyButton row={rows[3]} strBuilder={key} keyPress={setKey} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                >
                    <Text style={styles.delText}> Cap</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.spaceButton}
                    onPress={() => setKey(key + "  ")}
                >
                    <Text style={{ ...styles.spaceText, }}> Space </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={deleteButon}
                >
                    <Text style={styles.delText}> Del </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    deleteButton: {
        margin: 2,
        height: 40,
        width: 50,
        backgroundColor: '#FF9800',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 4
    },
    delText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    spaceButton: {
        margin: 2,
        height: 40,
        width: 150,
        backgroundColor: '#5F79B5',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 4
    },
    spaceText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});