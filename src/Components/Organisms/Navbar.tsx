import React from 'react'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'
import { Icons } from '@Components/Atoms/Icons'
import Button from '@Components/Atoms/Button'
import CardConatiner from '@Components/Atoms/CardContainer'
import { useDispatch } from "react-redux"
import { toogleReport } from "@Redux/Slices/ReportSlice"

const Navbar = (props: any) => {
    const dispatch = useDispatch()

    return (
        <CardConatiner radius="0px" margins="0px" padd="0px" height="55px" width="100%" justify="space-around" bg={colors.white} >
            <Container width="20%">
                <Icons style={null} color={colors.gray} size={40} name="menu" onPress={() => props.navigation.openDrawer()} />
            </Container>
            <Container width="60%">
                <Text fontSize="20px" fontWeight="bold" color={colors.gray} >{props.title}</Text>
            </Container>
            <Container width="20%">
                {props.name == "My orders" && (<Icons color={colors.gray} size={30} name="more-vert" style={null} onPress={() => dispatch(toogleReport())} />)}
            </Container>

        </CardConatiner>
    )
}

export default Navbar
