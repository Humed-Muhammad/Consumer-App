import React from 'react'
import Button from '@Components/Atoms/Button'
import Input from '@Components/Atoms/Inputs'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'
import Account from '@Components/Organisms/Account'
import { useDispatch, useSelector } from 'react-redux'
import { loggeIn } from '@Redux/Slices/AccountSlice'
import { Formik } from "formik"
import * as yup from "yup"
import FormError from '@Components/Organisms/FormError'
import Logo from '@Components/Organisms/Logo'
// import { Input } from 'native-base'

const Login = ({ navigation }: any) => {

    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state: any) => state.account)

    // yup validation schema
    const loginSchema = yup.object().shape({
        Email: yup.string().email().min(3).max(40).required(),
        Password: yup.string().min(4).max(40).required(),
    })

    return (
        <Formik
            initialValues={{ Email: '', Password: "" }}
            validationSchema={loginSchema}
            onSubmit={values => navigation.navigate("Auth")}
        >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
                <Container direction="column" justify="center" bg={colors.white} height="100%">
                    <Logo />
                    <Text fontWeight="bold" fontSize="25px">Login</Text>
                    <Input radius="7px" onChangeText={handleChange('Email')} value={values.Email} width="90%" placeholder="Email / Phone Number" />
                    <FormError error={errors.Email} touched={touched.Email} />
                    <Input radius="7px" onChangeText={handleChange('Password')} value={values.Password} width="90%" placeholder="Password" />
                    <FormError error={errors.Password} touched={touched.Password} />
                    <Container padd="7px" width="90%" justify="space-between">
                        <Text onPress={() => navigation.navigate("ForgetPassword")} color={colors.blue} >Forget password?</Text>
                        <Text onPress={() => navigation.navigate("Register")} color={colors.blue} >I dont't have account!</Text>
                    </Container>
                    <Button onPress={handleSubmit} width="90%" text="Login" />
                </Container>
            )}
        </Formik>
    )
}

export default Login
