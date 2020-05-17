import React from 'react'
import Router from './routes'
import { StatusBar, View, useColorScheme, YellowBox } from 'react-native'
import ThemeProvider from './Helpers/ThemeProvider'
console.disableYellowBox = true
YellowBox.ignoreWarnings([
  'Encountered an error loading page',
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly'
])
console.error = (error) => error.apply

export function App() {
  const colorScheme = useColorScheme()
  const lightThemeConstant = 'light'
  const isLightTheme = (theme: string) => theme === lightThemeConstant
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={isLightTheme(colorScheme) ? 'dark-content' : 'light-content'} />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </View>
  )
}
export default App