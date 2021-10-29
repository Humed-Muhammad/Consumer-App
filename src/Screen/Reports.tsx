import CardConatiner from '@Components/Atoms/CardContainer'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { ScrollView } from 'native-base'
import { colors } from '@Utils/Color/colors'
import React from 'react'
import { Icons } from '@Components/Atoms/Icons'
import { justifyContent } from 'styled-system'
import Button from '@Components/Atoms/Button'

const Reports = () => {
    return (
        <Container direction="column" height="100%">
            <ScrollView contentContainerStyle={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} width="100%">
                <CardConatiner padd="10px" justify="space-between" direction="column" height="150px" width="90%">
                    <Container justify="space-between" >
                        <Text fontWeight="bold" color={colors.gray} >Report Type: <Text>Item Lost</Text></Text>
                        <Icons color={colors.red} size={20} name="delete" />
                    </Container>
                    <Container justify="flex-start">
                        <Text>I have encountered on the journy</Text>
                    </Container>
                    <Container justify="space-between">
                        <Button height="40px" text="Pending" />
                        <Text fontWeight="bold" color={colors.gray} >Date <Text color={colors.secondary}>09/11/2021, 4:40</Text></Text>
                    </Container>
                </CardConatiner>
            </ScrollView>
        </Container>
    )
}

export default Reports
