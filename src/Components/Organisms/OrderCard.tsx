import React, { useState } from 'react'
import { TouchableHighlight } from "react-native"
import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import Image from '@Components/Atoms/Image'
import { colors } from '@Utils/Color/colors'
import Container from '@Components/Atoms/Container'
import { IconExpand, IconShrink } from '@Components/Atoms/Icons'
import OrderTrack from '@Components/Organisms/OrderTrack'
import Button from '@Components/Atoms/Button'



const OrderCard = ({ item, index, handleClick }) => {

    const justify = item.isClicked ? "flex-start" : "space-around"
    const height = item.isClicked ? "600px" : "150px"


    return (
        <TouchableHighlight onPress={() => handleClick(index)} style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} underlayColor={colors.white}  >
            <CardConatiner direction="column" justify={justify} width="95%" height={height}>
                {
                    item.isClicked ? <IconShrink /> : <IconExpand />
                }
                <Container justify="space-around" width="100%" height={item.isClicked ? "20%" : "50%"}>
                    <Container width="50%" align="flex-start" direction="column">
                        <Text fontWeight="bold">Order: <Text color={colors.secondary}>#{item.orderNumber}</Text></Text>
                        <Text fontWeight="bold">Date: <Text color={colors.secondary}>{item.date}</Text></Text>
                    </Container>
                    <Container width="40%" align="flex-start" direction="column">
                        <Text fontWeight="bold">Pickup: <Text color={colors.secondary}>{item.pickup[0].first}</Text></Text>
                        <Text fontWeight="bold">Dropoff: <Text color={colors.secondary}>{item.dropoff}</Text></Text>
                    </Container>
                </Container>
                <Container justify="space-around" height={item.isClicked ? "20%" : "50%"}>
                    <Container width="50%" align="flex-start" direction="column">
                        <Text fontWeight="bold">Estimation date: <Text color={colors.secondary}>{item.estimation.date}</Text></Text>
                    </Container>
                    <Container width="40%">
                        <Text fontWeight="bold">Estimation price: <Text color={colors.secondary}>{item.estimation.price}</Text></Text>
                    </Container>
                </Container>

                {item.isClicked && <OrderTrack />}
                {item.isClicked && <Container direction="column" height="20%">
                    <Button height="40px" text="Delivery Code" bg={colors.gray} width="90%" />
                    <Button height="40px" text="Cancle Order" width="90%" />
                </Container>}
            </CardConatiner>
        </TouchableHighlight>
    )
}






export default OrderCard
