import { useWindowDimensions } from "react-native";

export const useScreenOrientation = () => {
    const { width, height } = useWindowDimensions()

    const screenOrientation = (): 'PORTRAIT' | 'LANDSCAPE' => {
        if (width >= height) {
            return 'LANDSCAPE'
        }
        return 'PORTRAIT'

    }
    
    return {
        screenOrientation,
        width,
        height
    }

};