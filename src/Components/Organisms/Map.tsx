import React from 'react'
import Container from '@Components/Atoms/Container'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet } from 'react-native'
import { colors } from '@Utils/Color/colors'
import { getUserCurrentLocation } from '@Redux/Slices/PickUpSlice'
import { useAppSelector, useAppDispatch } from "@Redux/Hooks"
import { dropoffPlaces, pickupPlaces } from "@Redux/memorizedSelector"




const Map = () => {
    const dispatch = useAppDispatch()
    const { currentLocation } = useAppSelector((state: any) => state.pickup.userLocations)
    const pickup = useAppSelector(pickupPlaces)
    const dropoff = useAppSelector(dropoffPlaces)

    return (
        <Container direction="column" justify="flex-start" bg={colors.map} height="100%" width="100%">
            <MapView
                zoomEnabled
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                onRegionChangeComplete={(region) => {
                    console.log(region)
                    dispatch(getUserCurrentLocation(region))
                }}
                region={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: currentLocation.latitudeDelta || 0.021064477015438204,
                    longitudeDelta: currentLocation.longitudeDelta || 0.02132675609124921,
                }}
                followsUserLocation={false}

            >
                {
                    pickup.map((item, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                            image={{ uri: "https://img.icons8.com/ios-filled/100/000000/marker-p.png" }}

                        />
                    ))

                }
                {
                    dropoff.map((item, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                            image={{ uri: "https://img.icons8.com/ios-filled/100/000000/marker-d.png" }}

                        />
                    ))
                }
            </MapView>

        </Container>
    )
}


const styles = StyleSheet.create({

    map: {
        position: "absolute",
        top: 0,
        bottom: -25,
        left: 0,
        right: 0,

    },
});

export default Map
