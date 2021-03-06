import { Platform, Dimensions } from 'react-native'
export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

const isAndroidWNotchFx = () => {
    const dimen = Dimensions.get('window')
    const { height, width } = { ...dimen }
    return !isIOS && (height > 700 || width > 700)
}
const isIphoneWNotchFx = () => {
    const dimen = Dimensions.get('window')
    return (
        Platform.OS === 'ios' &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    )
}
export const isAndroidWNotch = isAndroidWNotchFx()
export const isIphoneWNotch = isIphoneWNotchFx()