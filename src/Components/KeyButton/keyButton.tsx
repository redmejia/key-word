import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";

interface KeyButtonProps {
    row?: string[];
}



export const KeyButton = ({ row }: KeyButtonProps): JSX.Element => {

    const { width } = useWindowDimensions()

    return (
        <>
            {
                row?.map((i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={{ ...styles.button, width: width * 0.08 }}
                        >
                            <Text style={styles.text}> {i} </Text>
                        </TouchableOpacity>
                    )
                })}

        </>

    );
};

const styles = StyleSheet.create({
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