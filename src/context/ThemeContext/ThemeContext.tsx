import { createContext, useEffect, useReducer } from "react";
import { colors, darkThemeColors, lightThemeColors } from "./colors";
import { initState, themeReducer } from "./ThemeReducer";
import { ACTION } from "./actions";
import { AppState, Appearance } from "react-native";


export interface ThemeContextProps {
    theme: colors;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {

    // const [theme, dispatch] = useReducer(themeReducer,  initState)
    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? initState : initState)

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme()
            }
        })
    }, [])


    const setLightTheme = (): void => {
        dispatch({ type: ACTION.LIGHT, payload: lightThemeColors })
    }


    const setDarkTheme = (): void => {

        dispatch({ type: ACTION.DARK, payload: darkThemeColors })
    }

    return (

        <ThemeContext.Provider value={{
            theme: theme.colors,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>

    )

}