import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { lightTheme, darkTheme } from './Themes'
import { useColorScheme } from 'react-native'

const LoadingProvider = ({ children }) => {
    const lightThemeConstant = 'light'
    const isLightTheme = (theme: string) => theme === lightThemeConstant
    const [colorScheme, setColorScheme] = useState(useColorScheme())
    const changeTheme = (newMode: any) => {
        setColorScheme(newMode)
    }
    const themeProvider = {
        colorScheme,
        isLightTheme: isLightTheme(colorScheme),
        theme: isLightTheme(colorScheme) ? lightTheme : darkTheme,
        changeTheme
    }

    return (
        <ThemeContext.Provider value={themeProvider}>
            {children}
        </ThemeContext.Provider >
    )
}

export default LoadingProvider