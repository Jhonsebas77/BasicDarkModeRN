import React, { useContext } from 'react'
import { View } from 'react-native'
import Pokemon from './../List_Pokemon'
import { getComponentStyle } from '../../Helpers/Stylus'
import { ThemeContext } from './../../Helpers/ThemeContext'
import style from './home.style'

const styles = getComponentStyle(style)
export default function Home() {
    const theme = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Pokemon />
        </View>
    )
}