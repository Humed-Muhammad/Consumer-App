import React, { useState } from "react"
import Container from "@Components/Atoms/Container"
import PickupLocation from "@Components/Organisms/PickupLocation"
import VehicleCard from "@Components/Organisms/VehicleCard"
import { ScrollView } from "react-native"
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



const Pickup = ({ navigation }) => {
    let [isSender, setIsSender] = useState(false)
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

    const dispatch = useDispatch()
    const { pickupPlace } = useSelector((state: any) => state.pickup)
    const { pickupIsChecked } = useSelector((state: any) => state.pickup.status)
    const { sender } = useSelector((state: any) => state.pickup)
    const { vehicleId } = useSelector((state: any) => state.pickup)
    const { dropoffIsChecked } = useSelector((state: any) => state.dropoff.status)
    console.log("pickupischeked " + pickupIsChecked, "dropoffIsChecked " + dropoffIsChecked, "sender " + JSON.stringify(sender))

    console.log("vehicle id " + vehicleId)



    const Vehicles = vehicleList.map((item, index) => {
        return (<VehicleCard handleClick={handleClick} item={item} key={index} index={index} />)
    })



    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                {pickupPlace.length == 0 && (
                    <Formik
                        initialValues={{ mainLocation: "Current Location", specificLocaiton: "", senderName: "", senderPhone: "" }}
                        onSubmit={values => {
                            dispatch(pickupChangeIconStatus())
                            dispatch(pickupAddPickupPlace({ mainLocation: values.mainLocation, specificLocaiton: values.specificLocaiton }))
                            if (pickupIsChecked) {
                                dispatch(handlePickupSender({ senderName: values.senderName, senderPhone: values.senderPhone }))
                            } else {
                                dispatch(handlePickupSender({ senderName: "Humed", senderPhone: "0912974103" }))
                            }
                        }}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (


                            <>
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
                                                <Input onChangeText={handleChange("senderName")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
                                                <Input onChangeText={handleChange("senderPhone")} radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
                                            </Container>)
                                        }
                                    </Container>
                                </Container>
                                {/* <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Pickup location" /> */}
                                <GooglePlace />
                                <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific pickup location" />
                                <Container padd="0px" width="90%" justify="flex-start">
                                    <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                </Container>
                            </>
                        )}
                    </Formik>
                )}
                <PickupLocation setIsSender={setIsSender} text="I am not the sender" />
                <ScrollView horizontal={true}>
                    {
                        Vehicles
                    }
                </ScrollView>
                <Container justify="space-around" >
                    <Button onPress={() => navigation.navigate("Root")} text="Back" width="45%" />
                    <Button disabled={true} bg={colors.secondary} onPress={() => navigation.navigate("Drop-off")} text="Next" width="45%" />
                </Container>
            </Container>
        </Container>
    )
}

export default Pickup
