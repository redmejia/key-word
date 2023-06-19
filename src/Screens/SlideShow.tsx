import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RenderCard, SlideProps } from "../Components/SlideShow/RenderCard";
import { SlideIndicator } from "../Components/SlideShow/SlideIndicator";
import { useRef, useState } from "react";

const DataService: SlideProps[] = [
    {
        id: 1,
        title: "Web",
        desc: "Pellentesque habitant morbi tristique",
        img: require('../assets/public/web.png')
    },
    {
        id: 2,
        title: "Mobile",
        desc: "Pellentesque habitant morbi tristique",
        img: require('../assets/public/mobile.png')
    },
    {
        id: 3,
        title: "Back-end",
        desc: "Pellentesque habitant morbi tristique",
        img: require('../assets/public/back-end.png')
    }
]


export const Slide = (): JSX.Element => {

    const flatListRef = useRef<FlatList>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const next = (index: number) => {

        if (index <= 1) {
            flatListRef.current?.scrollToIndex({
                animated: true,
                index: index + 1
            })
            setCurrentIndex(index + 1)
        }

    }

    const back = (index: number) => {

        if (index >= 1) {
            flatListRef.current?.scrollToIndex({
                animated: true,
                index: index - 1
            })
            setCurrentIndex(index - 1)
        }
    }


    return (
        <View >
            <FlatList

                ref={flatListRef}
                data={DataService}
                renderItem={({ item }) => {
                    return (
                        <View>

                            <RenderCard
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                            />

                        </View>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={100} // slow or fast

            />
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >

                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.navBtn}
                        onPress={() => back(currentIndex)}
                    >
                        <Text style={styles.navBtnText} > Back</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.navBtn}
                        onPress={() => next(currentIndex)}
                    >
                        <Text style={styles.navBtnText}>Next</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ flex: 1 }}>

                <SlideIndicator
                    length={DataService.length}
                    indexAt={currentIndex}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btns: {
        // marginRight: 40,
        paddingHorizontal: 50,
        marginVertical: 10
    },
    navBtn: {
        backgroundColor: 'rgba(0,182,100, 0.50)',
        borderRadius: 10,
        height: 40,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBtnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
});