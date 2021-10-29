import React, { useState } from 'react'
import Button from '@Components/Atoms/Button'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'
import Logo from '@Components/Organisms/Logo'
import { Radio } from 'native-base'


const ChooseMethod = ({ navigation }: any) => {
    let [value, setValue] = useState("one")

    return (

        <Container direction="column" height="100%">
            <Logo />
            <Container direction="column" justify="space-evenly" bg={colors.white} height="50%">
                <Text fontWeight="bold" fontSize="20px">How do you want to rest your password?</Text>
                <Container direction="column">
                    <Radio.Group
                        name="myRadioGroup"
                        value={value}
                        onChange={(nextValue) => {
                            setValue(nextValue);
                        }}
                    >
                        <Radio value="one" my={1}>
                            Send Email to abc****@gmail.com
                        </Radio>
                        <Radio value="two" my={1}>
                            Send SMS to 09****03
                        </Radio>
                    </Radio.Group>
                </Container>
                <Button onPress={() => navigation.navigate("Verify")} width="90%" text="Find" />
            </Container>
        </Container>

    )
}

export default ChooseMethod
