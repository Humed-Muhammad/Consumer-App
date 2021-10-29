import React from 'react';
import styled, { css } from '@emotion/native'
import { colors } from "@Utils/Color/colors"


const Text = styled.Text({
    color: "white",
})

const Pressable = styled.Pressable`
    margin:5px;
    padding:2px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color: ${colors.gray};
`


const Button = ({ width, height, radius, z, b, position, text, onPress, bg }: any) => {
    return (
        <Pressable style={
            css`width: ${width || "100px"}; 
            height:${height || "50px"}; border-radius: ${radius || "3px"}; position: ${position || "relative"}; bottom: ${b || 0}; z-index: ${z || 0}; background-color: ${bg};`
        }
            onPress={() => onPress() || null
            }>
            <Text>{text}</Text>
        </Pressable>
    )
}

export default Button;
