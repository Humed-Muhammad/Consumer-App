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
    addReceiver
} from '@Redux/Slices/DropoffSlice'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import { ScrollView } from 'native-base'
import { Icons } from '@Components/Atoms/Icons'
import ModalView from '@Components/Organisms/Modal'
import { colors } from "@Utils/Color/colors"
import CheckboxInputs from "@Components/Organisms/CheckboxInputs"
import NonCheckboxInputs from "@Components/Organisms/NonCheckboxInputs"
import GooglePlacesInput from '@Components/Organisms/GooglePlace'



const Dropoff = ({ navigation }) => {
    const [isReceiver, setIsReceiver] = useState(false)
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

    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                {
                    dropoffPlace.length == 0 && (
                        <Formik
                            initialValues={{ mainLocation: "", specificLocaiton: "", receiverName: "", receiverPhone: "" }}
                            onSubmit={values => {
                                dispatch(addDropoffPlace({ mainLocation: values.mainLocation, specificLocaiton: values.specificLocaiton }))
                                if (!dropoffIsChecked) {
                                    dispatch(addReceiver({ receiverName: values.receiverName, receiverPhone: values.receiverPhone }))
                                } else {
                                    dispatch(addReceiver({ receiverName: "Ahmed", receiverPhone: "0913452000" }))
                                }
                                console.log(values)
                            }}
                        >
                            {({ handleSubmit, handleChange, values, errors }) => (

                                <>
                                    <Container justify="flex-start" width="85%">
                                        {
                                            dropoffIsChecked ? (
                                                <CheckboxInputs handleChange={handleChange} text="I am not the receiver" />
                                            ) : (
                                                <NonCheckboxInputs handleChange={handleChange} />
                                            )
                                        }
                                    </Container>
                                    {/* <Input width="90%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Drop-off location" /> */}
                                    <GooglePlacesInput />
                                    <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific drop-off location" />
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
                                                <CardConatiner padd="10px" key={index} bg={colors.gray} justify="space-around" height="90%" width="100px">
                                                    <Text color={colors.white} key={index} fontSize="12px" fontWeight="bold" >{item && item.mainLocation}</Text>
                                                    <Icons style={null} onPress={() => dispatch(removeDropoffPlace(index))} color={colors.white} size={17} name="close" />
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
                            initialValues={{ mainLocation: "", specificLocaiton: "" }}
                            onSubmit={(values) => {
                                dispatch(addDropoffPlace(values))
                                dispatch(dropoffToogleModal())
                            }}
                        >
                            {({ handleSubmit, values, handleChange }) => (
                                <Container height="100%" direction="column">
                                    <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                        {
                                            dropoffIsChecked ? (
                                                <CheckboxInputs handleChange={handleChange} text="I am not the receiver" />
                                            ) : (
                                                <NonCheckboxInputs handleChange={handleChange} />
                                            )
                                        }
                                    </Container>
                                    {/* <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Drop-off location" /> */}
                                    <Container height="200px" direction="column">
                                        <GooglePlacesInput />
                                        <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific drop-off location" />
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
                    <Button bg={colors.secondary} onPress={() => navigation.navigate("")} text="Next" width="45%" />
                </Container>


            </Container>
        </Container>
    )
}

export default Dropoff
