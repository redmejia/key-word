import { View, Text, StyleSheet, TouchableOpacity, TextInput, TextInputFocusEventData, NativeSyntheticEvent } from "react-native";
import { KeyButton } from "../Components/KeyButton/keyButton";
import { useState } from "react";
import { TextBox } from "../Components/TextBox/TextBox";
import { ActionButton } from "../Components/ActionButton/ActionButton";

export const KeyWord = (): JSX.Element => {


    const [key, setKey] = useState("")

    const rows: string[][] = [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ","],
        ["z", "x", "c", "v", "b", "n", "m", "."],
        ["-", "+", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"],
    ]

    const deleteButton = (): void => {
        if (key.length > 1) {
            setKey(key.slice(0, -1))
        } else {
            setKey("");
        }
    }

    const spaceButton = (): void => {
        setKey(key + " ")
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
                {/* <ActionButton
                    width={50}
                    label="Cap"
                    color='#FF9800'
                /> */}
                <ActionButton
                    label="Space"
                    action={spaceButton}
                />
                <ActionButton
                    width={50}
                    label="Del"
                    color='#FF9800'
                    action={deleteButton}
                />
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
});