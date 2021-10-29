import CardConatiner from '@Components/Atoms/CardContainer'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'
import React from 'react'

const Logo = () => {
    return (
        <CardConatiner height="70px" radius="0px" width="300px" top="35px" position="absolute">
            <Text color={colors.primary} fontWeight="bold" fontSize="30px">Easy<Text color={colors.secondary} fontWeight="bold" >Delivery</Text></Text>
        </CardConatiner>
    )
}

export default Logo
