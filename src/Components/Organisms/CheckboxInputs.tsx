import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from '@Utils/Color/colors';

const Sender = ({ text, handleChange }) => {
    let [isSender, setIsSender] = useState(false)
    return (
        <Container direction="column" width="100%" >
            <Container justify="flex-start" >
                <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text={text} onPress={(isChecked: boolean) => { setIsSender(isChecked) }} />
            </Container>
            {
                isSender && (<Container>
                    <Input onChangeText={handleChange("receiverName")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
                    <Input onChangeText={handleChange("receiverPhone")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
                </Container>)
            }
        </Container>
    )
}

export default Sender
