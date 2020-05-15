import { Dimensions } from 'react-native'
import { isIphoneWNotch } from '../../Helpers/Constant'
const { width, height } = Dimensions.get('window')

export default {
    loading: {
        width: width,
        height: isIphoneWNotch ? height - 110 : height,
        paddingTop: 50
    },
    contentItemPokemon: {
        paddingTop: 10,
        height: 550
    }
}
