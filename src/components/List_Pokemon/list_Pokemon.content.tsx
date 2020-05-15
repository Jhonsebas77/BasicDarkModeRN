import React, { useEffect, useState } from 'react'
import { FlatList, View, Switch, Text } from 'react-native'
import { getAllPokemon } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import ItemPokemon from './Item_Pokemon'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Tools'
import Loading_Screen from '../Loading'
import style from './list_Pokemon.style'

const styles = getComponentStyle(style)
export default function List_Pokemon() {
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [newPokemonData, setNewPokemonData] = useState([])
    const preparePokemon = (pokedex: Array<any>) => {
        return pokedex.map((pokemon) => {
            const { idDex = 0, name = '', url = '', urlSprite = '', types: [pokemonTypes] = {} } = { ...pokemon }
            const { typeOneName = '', typeOneURL = '', typeOneUrlSprite = '', typeTwoName = '', typeTwoURL = '', typeTwoUrlSprite = '' } = pokemonTypes
            return { idDex, name, url, urlSprite, typeOneName, typeOneURL, typeOneUrlSprite, typeTwoName, typeTwoURL, typeTwoUrlSprite }
        })
    }
    useEffect(() => {
        const getPokemonData = async () => {
            const pokedex = await getAllPokemon()
            const pokedex_ = pokedex && preparePokemon(pokedex)
            setNewPokemonData(pokedex_)
            setLoading(true)
            setLoadData(true)
        }
        !LoadData && getPokemonData()
    }, [loading])

    const renderLoadingView = () => {
        return !loading && (
            <Loading_Screen textLoading={'Cargando la Pokedex...'} />
        )
    }

    return (
        <View style={styles.loading} >
            {renderLoadingView()}
            <View style={styles.containerDarkMode}>
                <Text>{'Activar Modo Oscuro '}</Text>
                <Switch style={styles.switch} trackColor={{ true: 'red', false: 'grey' }} thumbColor={'black'} />
            </View>
            <View style={styles.contentItemPokemon}>
                <FlatList
                    data={newPokemonData}
                    keyExtractor={item => `pokemon_${(item as any).idDex}`}
                    renderItem={({ item }) =>
                        <ItemPokemon
                            number={paddingNumber((item as any).idDex)}
                            name={_.capitalize((item as any).name)}
                            spriteSource={{ uri: (item as any).urlSprite }}
                            typeTwoSource={{ uri: (item as any).typeTwoUrlSprite && (item as any).typeTwoUrlSprite }}
                            typeOneSource={{ uri: (item as any).typeOneUrlSprite && (item as any).typeOneUrlSprite }}
                        />
                    } />
            </View>
        </View>
    )
}