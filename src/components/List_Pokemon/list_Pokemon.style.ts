import { Dimensions } from 'react-native'
import { isIphoneWNotch } from '../../Helpers/Constant'
const { width, height } = Dimensions.get('window')

export default {
    loading: {
        width: width,
        height: isIphoneWNotch ? height - 110 : height,
        paddingTop: 10
    },
    contentItemPokemon: {
        height: 570
    },
    switch: {

    },
    containerDarkMode: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
