import { View, Text, ImageSourcePropType, StyleSheet, TouchableWithoutFeedback, Image, useWindowDimensions, StyleProp, ViewProps, ViewStyle, } from "react-native";
import { useScreenOrientation } from "../../hooks/useScreenOrientation";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export interface SlideProps {
    id: number;
    title?: string;
    desc?: string;
    img: ImageSourcePropType;
    // cardStyle?: StyleProp<ViewStyle>
    idx?: number;

}


export const RenderCard = ({ id, title, desc, img }: SlideProps): JSX.Element => {

    const { screenOrientation, width, height } = useScreenOrientation()

    const { theme } = useContext(ThemeContext)

    return (
        <View key={id}>
            <TouchableWithoutFeedback>
                <View style={
                    screenOrientation() === "LANDSCAPE"
                        ?
                        {
                            ...styles.cardBox,
                            marginHorizontal: 50,
                            width: width * 0.30,
                            height: height * 0.20
                        }
                        : styles.cardBox
                }>
                    <Image
                        style={
                            screenOrientation() === "LANDSCAPE"
                                ? { ...styles.image, }
                                : styles.image
                        }
                        source={img}
                    />
                </View>
            </TouchableWithoutFeedback >
            <View style={styles.textBox}>
                <Text style={{
                    ...styles.title,
                    color: theme.text
                }}>{title}</Text>
                <Text style={{
                    ...styles.description,
                    color: theme.text
                }}>{desc}</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    cardBox: {
        margin: 35,
        height: 400,
        width: 400,
        marginHorizontal: 10,
        borderRadius: 10,
        // backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,

    },
    image: {
        flex: 1,
        // width: 400,
        // height: 400,
        resizeMode: 'contain'
    },
    textBox: {
        marginHorizontal: 10,
        // paddingHorizontal : 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    description: {
        // marginHorizontal: 5,
        fontSize: 20,

    }
});