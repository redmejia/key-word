import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface ActionBtnProps {
    label?: string;
    width?: number;
    color?: string;
    action?: () => void
}

export const ActionButton = ({ label, width = 150, color = '#5F79B5', action }: ActionBtnProps): JSX.Element => {
    return (
        <View>
            <TouchableOpacity
                onPress={action}
                style={{
                    ...styles.button,
                    width,
                    backgroundColor: color
                }}
            >
                <Text style={styles.buttonText}> {label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 2,
        height: 40,
        width: 150,
        backgroundColor: '#5F79B5',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 4
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});