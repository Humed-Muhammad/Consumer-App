import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import { colors } from '@Utils/Color/colors';
import FormError from './FormError';

const Sender = ({ handleChange, keyboardType, errors, touched }) => {
    let [isSender, setIsSender] = useState(false)
    return (
        <Container width="100%" >
            <Container width="50%" direction="column">
                <Input onChangeText={handleChange("name")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="100%" />
                <FormError error={errors.name} touched={touched.name} />
            </Container>
            <Container width="50%" direction="column">
                <Input keyboardType={keyboardType} onChangeText={handleChange("phone")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="100%" />
                <FormError error={errors.phone} touched={touched.phone} />
            </Container>

        </Container>
    )
}

export default Sender
