import * as React from 'react'

import { StyleSheet } from 'react-native'
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
} from 'react-native-document-picker'
import { useEffect } from 'react'
import { Icons } from '@Components/Atoms/Icons'
import { colors } from '@Utils/Color/colors'
import { useDispatch } from 'react-redux'

export default function FilePicker({ changeImage }) {

    const dispatch = useDispatch()

    const style = {
        position: "absolute",
        zIndex: 10,
        right: "5.5%",
        bottom: 2,
        color: colors.gray,
        border: "2px solid",
        height: 50,
        width: 50,
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const [result, setResult] = React.useState<
        Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
    >()

    useEffect(() => {
        console.log(JSON.stringify(result, null, 2))
    }, [result])

    const handleError = (err: unknown) => {
        if (DocumentPicker.isCancel(err)) {
            console.warn('cancelled')
            // User cancelled the picker, exit any dialogs or menus and move on
        } else if (isInProgress(err)) {
            console.warn('multiple pickers were opened, only the last will be considered')
        } else {
            throw err
        }
    }

    const pickProfileImage = async () => {
        try {
            const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
            })
            const imageResult = pickerResult
            dispatch(changeImage(imageResult.uri))
        } catch (e) {
            handleError(e)
        }
    }

    return (
        <Icons style={style} size={40} color={colors.white} name="camera-alt" onPress={() => pickProfileImage()} />
    )
}

