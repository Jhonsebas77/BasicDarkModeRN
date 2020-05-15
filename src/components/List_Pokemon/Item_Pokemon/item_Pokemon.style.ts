
import { Dimensions } from 'react-native'
import { isAndroidWNotch, isIphoneWNotch } from '../../../Helpers/Constant'
const { width } = Dimensions.get('window')
export default {
    numberSprite: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    itemPokemon: {
        ios: {
            width: isIphoneWNotch ? 350 : width
        },
        android: {
            width: isAndroidWNotch ? 340 : width
        },
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginHorizontal: 10,
        marginVertical: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50
    },
    sprite: {
        width: 30,
        height: 30
    },
    spriteContainer: {
        width: 30,
        height: 30
    },
    typeOneContainer: {
        ios: {
            width: isIphoneWNotch ? 47 : 40
        },
        android: {
            width: isAndroidWNotch ? 45 : 40
        },
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    type: {
        ios: {
            width: isIphoneWNotch ? 47 : 40
        },
        android: {
            width: isAndroidWNotch ? 45 : 40
        },
        height: 40,
        borderRadius: 10
    },
    textNumber: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    textName: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10
    }
}
