import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import React from 'react'
import Text from '@Components/Atoms/Text'


const FormError = ({ error, touched }) => {
    return (
        <Container width="90%" justify="flex-start" >
            {error && touched ? <Text color={colors.red}>{error}</Text> : null}
        </Container>
    )
}

export default FormError
