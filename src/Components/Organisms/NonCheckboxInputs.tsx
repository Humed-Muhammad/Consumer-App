import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import { colors } from '@Utils/Color/colors';

const Sender = ({ handleChange }) => {
    let [isSender, setIsSender] = useState(false)
    return (
        <Container width="100%" >
            <Input onChangeText={handleChange("senderName")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
            <Input onChangeText={handleChange("senderPhone")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
        </Container>
    )
}

export default Sender
