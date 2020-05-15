import React from 'react'
import Router from './routes'
import { StatusBar, View, useColorScheme, YellowBox } from 'react-native'
import { ThemeContext } from './Helpers/ThemeContext'
import { lightTheme, darkTheme } from './Helpers/Themes'
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
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        backgroundColor='rgba(0, 0, 0, 0.2)'
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
      <ThemeContext.Provider
        value={colorScheme === 'light' ? lightTheme : darkTheme}
      >
        <Router />
      </ThemeContext.Provider>
    </View>
  )
}
export default App