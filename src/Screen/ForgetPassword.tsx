import React from 'react'
import Button from '@Components/Atoms/Button'
import Input from '@Components/Atoms/Inputs'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'
import { Formik } from "formik"
import * as yup from "yup"
import FormError from '@Components/Organisms/FormError'
import Logo from '@Components/Organisms/Logo'

const ForgetPassword = ({ navigation }: any) => {

    // yup validation schema
    const loginSchema = yup.object().shape({
        Feild: yup.string().email().min(3).max(40).required(),
    })

    return (
        <Formik
            initialValues={{ Feild: '' }}
            validationSchema={loginSchema}
            onSubmit={values => navigation.navigate("Choose")}
        >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
                <Container direction="column" height="100%">
                    <Logo />
                    <Container direction="column" justify="space-evenly" bg={colors.white} height="50%">
                        <Text fontWeight="bold" fontSize="25px">Forgot Password?</Text>
                        <Container direction="column">
                            <Input radius="7px" onChangeText={handleChange('Feild')} value={values.Feild} width="90%" placeholder="Email / Phone Number" />
                            <FormError error={errors.Feild} touched={touched.Feild} />
                        </Container>
                        <Button onPress={handleSubmit} width="90%" text="Find" />
                    </Container>
                </Container>
            )}
        </Formik>
    )
}

export default ForgetPassword
