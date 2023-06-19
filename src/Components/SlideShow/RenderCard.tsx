import { View, Text, ImageSourcePropType, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";

export interface SlideProps {
    id: number;
    title?: string;
    desc?: string;
    img: ImageSourcePropType;
    // cardStyle?: StyleProp<ViewStyle>
    idx?: number;

}


export const RenderCard = ({ id, title, desc, img }: SlideProps): JSX.Element => {

    return (
        <View key={id}>
            <TouchableWithoutFeedback>
                <View style={styles.cardBox}>
                    <Image
                        style={styles.image}
                        source={img}
                    />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.textBox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{desc}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardBox: {
        margin: 35,
        height: 420,
        width: 400,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,

    },
    image: {
        flex: 1,
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