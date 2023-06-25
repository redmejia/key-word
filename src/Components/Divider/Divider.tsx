import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface DividerProps {
    dividerStyle?: StyleProp<ViewStyle>
}

export const Divider = ({ dividerStyle }: DividerProps): JSX.Element => {
    return (
        <View style={[
            styles.divider, dividerStyle
        ]} />
    );
};

const styles = StyleSheet.create({
    divider: {
        marginVertical: 2,
        backgroundColor: 'green',
        height: 1,
        shadowColor: '#999999',
        shadowOffset: { height: 3, width: -1 },
        shadowOpacity: 0.2
    }
});