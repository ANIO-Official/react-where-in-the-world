import React, { createContext, useContext } from 'react';
import type { Theme, ThemeContextType} from '../../types';



//Create the context, export for access in other modules
//undefined = not wrapping component that needs it
export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

//Create a Toggle function as a custom Hook
//Consumes the theme and throws error when not setup properly
export const useThemeContext = () => {
    const themeContext = useContext(ThemeContext)
    
    if(!themeContext){
        throw new Error(
            'Missing ThemeContent.Provider Wrapper.'
        )
    }
    return {
        setTheme: themeContext.setTheme, //setdefaults
        theme: themeContext.theme //setdefaults
    }
}