import React from 'react'
import { View, Text } from 'react-native'
import Container from '@Components/Atoms/Container'
import Image from '@Components/Atoms/Image'
import Button from '@Components/Atoms/Button'
import CardConatiner from '@Components/Atoms/CardContainer'
import { colors } from '@Utils/Color/colors'

const Summery = ({ roundType = "Single" }) => {
    return (
        <Container justify="space-around" height="100%" direction="column">
            <Container height="50%">
                <CardConatiner padd="10px" width="80%" height="200px">
                    <Image height="100%" width="100%" source={
                        require("../Assets/Images/vitz.png")
                    } />
                </CardConatiner>
            </Container>
            <Container>
                <Button height="40px" text="Single" />
                <Button height="40px" text="Round" />
            </Container>
            <Container justify="space-around" >
                <Button width="45%" text="Cancle" />
                <Button bg={colors.secondary} width="45%" text="Confirm Order" />
            </Container>
        </Container>
    )
}

export default Summery
