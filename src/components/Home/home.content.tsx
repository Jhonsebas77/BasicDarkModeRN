import React, { Component } from 'react'
import { View } from 'react-native'
import Pokemon from './../List_Pokemon'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './home.style'

const styles = getComponentStyle(style)
export default class Home extends Component<IHomeProps, IHomeState> {
    render() {
        return (
            <View style={styles.container}>
                <Pokemon />
            </View>
        )
    }
}