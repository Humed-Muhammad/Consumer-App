import React from 'react'
import Button from '@Components/Atoms/Button'
import Input from '@Components/Atoms/Inputs'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'
import Account from '@Components/Organisms/Account'
import { Formik } from 'formik'
import * as yup from "yup"
import FormError from '@Components/Organisms/FormError'

const Register = ({ navigation }: any) => {


    // yup validation schema
    const registerSchema = yup.object().shape({
        First_name: yup.string().required(),
        Last_name: yup.string().required(),
        Email: yup.string().email().min(3).max(40).required(),
        Password: yup.string().min(4).max(40).required(),
        Phone_number: yup.string().required(),
    })

    return (
        <Formik
            initialValues={{ First_name: "", Last_name: "", Phone_number: "", Email: '', Password: "" }}
            validationSchema={registerSchema}
            onSubmit={values => navigation.navigate("Login")}
        >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
                <Container direction="column" justify="center" bg={colors.white} height="100%">
                    <Text fontWeight="bold" fontSize="25px">Register</Text>
                    <Input onChangeText={handleChange("First_name")} width="90%" placeholder="First Name" />
                    <FormError error={errors.First_name} touched={touched.First_name} />
                    <Input onChangeText={handleChange("Last_name")} width="90%" placeholder="Last Name" />
                    <FormError error={errors.Last_name} touched={touched.Last_name} />
                    <Input onChangeText={handleChange("Email")} width="90%" placeholder="Email" />
                    <FormError error={errors.Email} touched={touched.Email} />
                    <Input onChangeText={handleChange("Phone_number")} width="90%" placeholder="Phone Number" />
                    <FormError error={errors.Phone_number} touched={touched.Phone_number} />
                    <Input onChangeText={handleChange("Password")} width="90%" placeholder="Password" />
                    <FormError error={errors.Password} touched={touched.Password} />
                    <Container padd="7px" width="90%" justify="flex-end">
                        <Text onPress={() => navigation.navigate("Login")} color={colors.blue} >I have account!</Text>
                    </Container>
                    <Button onPress={handleSubmit} width="90%" text="Register" />
                </Container>
            )}</Formik>)

}

export default Register
