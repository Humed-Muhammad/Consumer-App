import Container from '@Components/Atoms/Container';
import { colors } from '@Utils/Color/colors';
import React from 'react'

const OrderTrack = () => {

    const buttonTextStyle = {
        color: '#393939'
    };
    return (
        <Container height="40%">
            <Container top="1px" left="35px" position="absolute" height="100%" width="2px" bg={colors.gray} ></Container>
        </Container>
    )
}

export default OrderTrack
