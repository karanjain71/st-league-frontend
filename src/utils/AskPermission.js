import {PermissionsAndroid, ToastAndroid} from 'react-native'

export const requestPermission = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ])
        console.log(granted, 'granted')

        if (PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE === "denied" ||
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE === "denied"
        ) {
            ToastAndroid.show('We cannot proceed without getting the permissions')
            requestPermission()
        }
        
    } catch (error) {
        console.log(error)
    }
}