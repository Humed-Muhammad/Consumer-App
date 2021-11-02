import React, { useState } from "react"
import Container from "@Components/Atoms/Container"
import PickupLocation from "@Components/Organisms/PickupLocation"
import VehicleCard from "@Components/Organisms/VehicleCard"
import { Alert, AlertButton, ScrollView } from "react-native"
import Button from "@Components/Atoms/Button"
import Map from "@Components/Organisms/Map"
import { useDispatch, useSelector } from "react-redux"
import { colors } from "@Utils/Color/colors"
import {
    pickupAddPickupPlace,
    pickupChangeIconStatus,
    pickupChangeIsChecked,
    handlePickupSender,
    getVehicleId
} from '@Redux/Slices/PickUpSlice';
import Input from "@Components/Atoms/Inputs"
import { Formik } from "formik"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { dropoffChangeIsChecked } from "@Redux/Slices/DropoffSlice"
import GooglePlace from "@Components/Organisms/GooglePlace"
import * as yup from "yup"
import FormError from "@Components/Organisms/FormError"
import { useAppDispatch, useAppSelector } from "@Redux/Hooks"
import { dropoffPlaces, pickupPlaces } from "@Redux/memorizedSelector"



const Pickup = ({ navigation }) => {
    let [isSender, setIsSender] = useState(false)

    let [value, setvalue]: any = useState({ senderName: "", senderPhone: "" })
    let [vehicle, setVehicle]: any = useState("")
    let [from, setFrom]: any = useState({})
    let [vehicleList, setVehicleList] = useState([
        {
            uri: "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            status: false,
            id: 1,
        },
        {
            uri: "https://img.favpng.com/2/23/2/toyota-vitz-toyota-aygo-car-toyota-avensis-png-favpng-WJ5EPmpHBr2bgbSHVwaXLLJk4.jpg",
            status: false,
            id: 2,
        },
        {
            uri: "https://img.favpng.com/15/9/8/2018-toyota-corolla-2017-toyota-corolla-car-2007-toyota-corolla-png-favpng-T0JG8SV7AcGAmbVQJh4X8pdYZ.jpg",
            status: false,
            id: 3,
        },
        {
            uri: "https://img.favpng.com/17/14/9/commercial-vehicle-car-south-africa-pickup-truck-png-favpng-JzveXKfAWcNfUaqXtMDupzZyT.jpg",
            status: false,
            id: 4,
        }])


    const handleClick = (index) => {
        let newvehicleList = [...vehicleList]
        vehicleList[index].status = true;
        dispatch(getVehicleId(vehicleList[index].id))

        vehicleList.map(item => {
            if (vehicleList.indexOf(item) != index) {
                item.status = false
            }
        })
        setVehicleList(newvehicleList)
    }

    const dispatch = useAppDispatch()
    const pickupPlace = useAppSelector(pickupPlaces)

    const { pickupIsChecked } = useSelector((state: any) => state.pickup.status)
    const { sender } = useSelector((state: any) => state.pickup)
    const { vehicleId } = useSelector((state: any) => state.pickup)
    const { dropoffIsChecked } = useSelector((state: any) => state.dropoff.status)
    console.log("pickupPlace " + JSON.stringify(pickupPlace), "pickupischeked " + pickupIsChecked, "dropoffIsChecked " + dropoffIsChecked, "sender " + JSON.stringify(sender))

    console.log("vehicle id " + vehicleId)



    const Vehicles = vehicleList.map((item, index) => {
        return (<VehicleCard handleClick={handleClick} item={item} key={index} index={index} />)
    })

    const validationSchema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.number().min(10).required(),
    })

    console.log(from)

    const handleSubmit = (values) => {
        if (from.latitude) {
            dispatch(pickupChangeIconStatus())
            dispatch(pickupAddPickupPlace(from))
            if (pickupIsChecked) {
                dispatch(handlePickupSender(values))
            } else {
                dispatch(handlePickupSender({ senderName: "client", senderPhone: "client" }))
            }
            setFrom({})
        } else {
            Alert.alert(
                "Pickup location",
                "Please add a pickup location...",
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

    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">

                <Formik
                    initialValues={{ name: "", phone: "", }}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={pickupIsChecked && validationSchema}
                >
                    {({ handleSubmit, handleChange, values, errors, touched }: any) => (
                        <>
                            {
                                pickupPlace.length == 0 && (
                                    <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                        <Container direction="column" width="100%" >
                                            <Container justify="flex-start">
                                                <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the sender" onPress={(isChecked: boolean) => {
                                                    setIsSender(isChecked)
                                                    dispatch(pickupChangeIsChecked("_"))
                                                    dispatch(dropoffChangeIsChecked("_"))
                                                }} />
                                            </Container>
                                            {
                                                isSender && (<Container>
                                                    <Container width="50%" direction="column">
                                                        <Input onChangeText={handleChange("name")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="100%" />
                                                        <FormError error={errors.name} touched={touched.name} />

                                                    </Container>
                                                    <Container width="50%" direction="column">
                                                        <Input onChangeText={handleChange("phone")} keyboardType="numeric" radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="100%" />
                                                        <FormError error={errors.phone} touched={touched.phone} />
                                                    </Container>
                                                </Container>)
                                            }
                                        </Container>

                                        <GooglePlace from={from} setFrom={setFrom} top={null} />
                                        <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={(text) => setFrom({ ...from, specificLoaction: text })} placeholder="Specific pickup location" />
                                        <Container padd="0px" width="90%" justify="flex-start">
                                            <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                        </Container>
                                    </Container>
                                )
                            }


                            <PickupLocation from={from} setFrom={setFrom} setIsSender={setIsSender} text="I am not the sender" />
                            <ScrollView horizontal={true}>
                                {
                                    Vehicles
                                }
                            </ScrollView>
                            <Container justify="space-around" >
                                <Button onPress={() => navigation.navigate("Root")} text="Back" width="45%" />
                                <Button bg={colors.secondary} onPress={() => {
                                    if (pickupPlace.length == 0) {

                                        handleSubmit(values)
                                        if (from.latitude) {
                                            navigation.navigate("Drop-off")
                                        }
                                    }
                                }} text="Next" width="45%" />
                            </Container>
                        </>
                    )}
                </Formik>
            </Container>
        </Container>
    )
}

export default Pickup
