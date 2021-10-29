import { colors } from '@Utils/Color/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { css } from '@emotion/native';



export const Icons = ({ onPress, name, style, size, color }) => {
    return (
        <Pressable style={css`${style}`} onPress={() => onPress()}>
            <Icon name={name} size={size} color={color} />
        </Pressable>
    )
}




export const IconExpand = () => {
    return (
        <Icon style={styles.iconDrop} name="expand-more" />
    )
}

export const IconShrink = () => {
    return (
        <Icon style={styles.iconDrop} name="expand-less" />
    )
}

export const IconPhoto = ({ onPress }) => {
    return (
        <Pressable onPress={() => onPress()} style={styles.iconPhotoContainer}>
            <Icon style={styles.iconPhoto} name="camera-alt" />
        </Pressable>
    )
}
export const IconForReport = ({ }) => {
    return (
        <Pressable>
            <Icon style={styles.iconPhoto} name="camera-alt" />
        </Pressable>
    )
}



const styles = StyleSheet.create({
    iconAdd: {
        position: "absolute",
        right: 5,
        zIndex: 100
    },
    iconMenu: {
        fontSize: 40,
        color: colors.gray
    },
    iconDrop: {
        fontSize: 30,
        position: "absolute",
        zIndex: 100,
        right: 5,
    },
    iconPhoto: {
        fontSize: 50,
        color: colors.gray
    },
    iconPhotoContainer: {
        position: "absolute",
        zIndex: 10,
        right: "29%",
        bottom: -6,
        color: colors.gray
    },

    iconNav: {
        fontSize: 30,
        color: colors.icon
    },
    iconCloseContainer: {
        position: "absolute",
        zIndex: 10,
        right: 20,
        top: 20,
        height: 40,
        width: 40,
        borderColor: colors.gray,
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 2,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }
    ,
    iconClose: {
        fontSize: 30,
        color: colors.gray
    }

})


