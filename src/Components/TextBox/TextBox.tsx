import { Text, View, StyleSheet } from "react-native";

interface TextBoxProps {
    text?: string;
}

export const TextBox = ({ text }: TextBoxProps): JSX.Element => {
    return (
        <View style={styles.entryBox}>
            <Text style={styles.textEntry}> {text} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    entryBox: {
        backgroundColor: '#3F51B5',
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    textEntry: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "500",
        paddingVertical: 10,
        paddingHorizontal: 10
    },

});
