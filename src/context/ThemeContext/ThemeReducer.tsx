
import { ACTION } from "./actions";
import { colors, lightThemeColors } from "./colors";

// actions 
type ThemeAction =
    | { type: ACTION.LIGHT, payload: colors }
    | { type: ACTION.DARK, payload: colors }


export interface ThemeState {
    colors: colors
}

export const initState: ThemeState = {
    colors: lightThemeColors
}


export const themeReducer = (state: typeof initState, action: ThemeAction) => {


    switch (action.type) {
        case ACTION.LIGHT:
            return {
                ...state,
                colors: action.payload
            }

        case ACTION.DARK:
            // console.log(action.payload);
            
            return {
                ...state,
                colors: action.payload
            }

        default:
            return state
    }

};

