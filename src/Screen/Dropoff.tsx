import React, { useState } from 'react'
import SenderReciver from '@Components/Organisms/CheckboxInputs'
import Container from '@Components/Atoms/Container'
import Location from '@Components/Organisms/PickupLocation'
import Input from '@Components/Atoms/Inputs'
import Map from '@Components/Organisms/Map'
import Button from '@Components/Atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
    addDropoffPlace,
    removeDropoffPlace,
    dropoffToogleModal,
    dropoffChangeIsChecked,
    addReceiver,
    removeReceiver
} from '@Redux/Slices/DropoffSlice'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import { Alert, ScrollView } from 'react-native'
import { Icons } from '@Components/Atoms/Icons'
import ModalView from '@Components/Organisms/Modal'
import { colors } from "@Utils/Color/colors"
import CheckboxInputs from "@Components/Organisms/CheckboxInputs"
import NonCheckboxInputs from "@Components/Organisms/NonCheckboxInputs"
import GooglePlacesInput from '@Components/Organisms/GooglePlace'
import * as yup from "yup"



const Dropoff = ({ navigation }) => {
    const [isReceiver, setIsReceiver] = useState(false)
    let [to, setTo]: any = useState({})
    const dispatch = useDispatch();
    const { dropoffPlace } = useSelector((state: any) => state.dropoff)
    const { receiver } = useSelector((state: any) => state.dropoff)
    const { dropoffIsChecked } = useSelector((state: any) => state.dropoff.status)
    const { pickupPlace } = useSelector((state: any) => state.pickup)
    console.log("dropoffIsChecked " + dropoffIsChecked, "dropoffPlace " + JSON.stringify(dropoffPlace))
    console.log("receiver " + JSON.stringify(receiver))
    // console.log(pickupPlace.length)
    const { dropoffModalStatus } = useSelector((state: any) => state.dropoff.status)
    const iconStyle = {
        right: 1,
        top: 1,
        zIndex: 100
    }

    const handleSubmit = (values) => {
        if (to.latitude) {
            dispatch(addDropoffPlace(to))
            if (!dropoffIsChecked) {
                dispatch(addReceiver(values))
            } else {
                dispatch(addReceiver({ name: "Ahmed", phone: "0913452000" }))
            }
            console.log(values)
            setTo({})
        }
        else {
            Alert.alert(
                "Dropoff location",
                "Please add a dropoff location...",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }
    }
    const handleModalSubmit = (values) => {
        if (to.latitude) {
            dispatch(addDropoffPlace(to))
            dispatch(addReceiver(values))
            dispatch(dropoffToogleModal())
            setTo({})
        } else {
            Alert.alert(
                "Dropoff location",
                "Please add a dropoff location...",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }
    }
    const validationSchema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.number().min(10).required(),
    })

    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                {
                    dropoffPlace.length == 0 && (
                        <Formik
                            initialValues={{ name: "", phone: "" }}
                            onSubmit={values => { handleSubmit(values) }}
                            validationSchema={validationSchema}
                        >
                            {({ handleSubmit, handleChange, values, errors, touched }) => (

                                <>
                                    <Container justify="flex-start" width="85%">
                                        {
                                            dropoffIsChecked ? (
                                                <CheckboxInputs keyboardType="numeric" errors={errors} touched={touched} handleChange={handleChange} text="I am not the receiver" />
                                            ) : (
                                                <NonCheckboxInputs errors={errors} touched={touched} keyboardType="numeric" handleChange={handleChange} />
                                            )
                                        }
                                    </Container>
                                    <GooglePlacesInput from={to} setFrom={setTo} top={null} />
                                    <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={(text) => setTo({ ...to, specificLocation: text })} placeholder="Specific drop-off location" />
                                    <Container padd="0px" width="90%" justify="flex-start">
                                        <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                    </Container>
                                </>
                            )}

                        </Formik>
                    )
                }
                <Container direction="column" width="90%" >
                    <Container direction="column">
                        {
                            dropoffPlace.length >= 1 && (
                                <CardConatiner padd="11px" justify="flex-start"  >
                                    <ScrollView horizontal>
                                        {
                                            dropoffPlace && dropoffPlace.map((item, index) => (
                                                <CardConatiner padd="10px" key={index} bg={colors.gray} justify="space-around" height="90%" width="170px">
                                                    <ScrollView horizontal>
                                                        <Text color={colors.white} key={index} fontSize="12px" fontWeight="bold" >{item && item.mainLocation}</Text>
                                                    </ScrollView>
                                                    <Icons style={null} onPress={() => {
                                                        dispatch(removeDropoffPlace(index))
                                                        dispatch(removeReceiver(index))
                                                        setTo({})
                                                    }} color={colors.white} size={17} name="close" />
                                                </CardConatiner>
                                            ))
                                        }
                                    </ScrollView>

                                    {
                                        pickupPlace.length <= 1 && (
                                            <Icons color={colors.icon} size={40} style={iconStyle} name="add" onPress={() => dispatch(dropoffToogleModal())} />
                                        )}
                                </CardConatiner>
                            )
                        }

                        <Input width="100%" placeholder="Additional infromation" height="120px" />
                    </Container>

                    {dropoffModalStatus && <ModalView justify="flex-start" height="100%" width="100%" status={dropoffModalStatus.status} onPress={() => dispatch(dropoffToogleModal())}>
                        <Formik
                            initialValues={{ name: "", phone: "" }}
                            onSubmit={(values) => {
                                handleModalSubmit(values)
                            }}
                            validationSchema={validationSchema}
                        >
                            {({ handleSubmit, values, handleChange, errors, touched }) => (
                                <Container height="100%" direction="column">
                                    <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                        {
                                            dropoffIsChecked ? (
                                                <CheckboxInputs keyboardType="numeric" errors={errors} touched={touched} handleChange={handleChange} text="I am not the receiver" />
                                            ) : (
                                                <NonCheckboxInputs errors={errors} touched={touched} keyboardType="numeric" handleChange={handleChange} />
                                            )
                                        }
                                    </Container>

                                    <Container height="200px" direction="column">
                                        <GooglePlacesInput from={to} setFrom={setTo} top={50} />
                                        <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={text => setTo({ ...to, specificLocation: text })} placeholder="Specific drop-off location" />
                                    </Container>
                                    <Container padd="0px" width="90%" justify="flex-end">
                                        <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                    </Container>
                                </Container>
                            )}
                        </Formik>
                    </ModalView>}

                </Container>
                <Container justify="space-around" >
                    <Button onPress={() => navigation.navigate("Pickup")} text="Back" width="45%" />
                    <Button bg={colors.secondary} onPress={() => {
                        if (dropoffPlace.length > 0) {
                            navigation.navigate("summery")
                        }
                    }} text="Next" width="45%" />
                </Container>


            </Container>
        </Container>
    )
}

export default Dropoff
