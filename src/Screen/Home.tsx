import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Button from '@Components/Atoms/Button';
import Map from "@Components/Organisms/Map"
import { colorSelector } from "@Redux/selector"
import { PermissionsAndroid } from 'react-native';



const Home = ({ navigation }: any) => {
    console.log(colorSelector)
    const [granted, setGranted] = useState(false)
    const requestGeolocationAccess = async () => {
        try {
            const accessGrante = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "EasyDelivery",
                    message:
                        "EasyDelivery needs access to your Location ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (accessGrante === PermissionsAndroid.RESULTS.GRANTED) {
                setGranted(true)
                console.log("You can use the location");
            } else {
                setGranted(false)
                console.log("Location permission denied");
            }
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <Map granted={granted} />
            <Container>
                <Button bg={colorSelector("gray")} onPress={() => navigation.navigate("Pickup")} text="Book now" width="90%" position="absolute" b="10px" z="100" />
            </Container>

        </>
    )
}


export default Home
