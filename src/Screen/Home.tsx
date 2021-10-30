import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Button from '@Components/Atoms/Button';
import Map from "@Components/Organisms/Map"
import { colorSelector } from "@Redux/selector"




const Home = ({ navigation }: any) => {
    console.log(colorSelector)
    const [granted, setGranted] = useState(false)

    return (
        <>
            <Map />
            <Container>
                <Button bg={colorSelector("gray")} onPress={() => navigation.navigate("Pickup")} text="Book now" width="90%" position="absolute" b="10px" z="100" />
            </Container>

        </>
    )
}


export default Home
