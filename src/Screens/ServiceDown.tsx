import { useContext, useEffect, useRef } from "react";
import { Animated, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

export const ServiceDown = (): JSX.Element => {

    const opacity = useRef(new Animated.Value(0.1)).current
    
    const { theme } = useContext(ThemeContext);

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }
        ).start()
    }

    useEffect(()=>{
        fadeIn()
    },[])

    return (
        <Animated.View style={{
            ...styles.box,
            opacity: opacity
        }}>
            <Text style={{
                ...styles.textStyle,
                color : theme.text,
            }}>
                Status Code : 503
            </Text>
            <Animated.Image 
                style={{
                    ...styles.imageStyle,
                    opacity: opacity
                }}
                source={require('../assets/public/service-down.png')}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle : {
        fontSize: 20,
    },
    imageStyle :  {
        width: 70,
        height: 70,
    }
});