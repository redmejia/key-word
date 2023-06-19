import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface IndicatorProps {
    length: number;
    indexAt?: number;
    height?: number;
    width?: number;
    inactive?: StyleProp<ViewStyle>;
    active?: StyleProp<ViewStyle>;
}



export const SlideIndicator = ({ length, indexAt, height = 12, width = 12, inactive, active }: IndicatorProps): JSX.Element => {



    let indicator: JSX.Element[] = [];

    for (let element = 0; element < length; element++) {
        indicator.push(
            <View key={element} style={[styles.inactiveIndicator, { width, height }, inactive]}
            />

        )
    }


    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {
                indicator.map((indicator, index) => {
                    if (index === indexAt) {
                        return (
                            <View
                                key={index}
                                style={
                                    [
                                        styles.activeIndicator,
                                        { width, height },
                                        active
                                    ]
                                }
                            />
                        )
                    }
                    return (
                        indicator
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    inactiveIndicator: {
        backgroundColor: '#AEAEAE',
        margin: 10,
        borderRadius: 30,
    },
    activeIndicator: {
        backgroundColor: 'rgba(0,182,100, 0.50)',
        margin: 10,
        borderRadius: 30,
    }
});