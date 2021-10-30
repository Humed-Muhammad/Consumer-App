import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Container from '@Components/Atoms/Container'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet } from 'react-native'
import { colors } from '@Utils/Color/colors'
import Geolocation from "react-native-geolocation-service"
import { getUserCurrentLocation } from '@Redux/Slices/PickUpSlice'
import { createSelector } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from 'react-redux'
import { requestGeolocationAccess } from '@Utils/PermissionRequestes';
import store from '@Redux/store'




const Map = () => {
    const dispatch = useDispatch()
    const state = store.getState()

    const pickupplace = () => state.pickup.pickupPlace

    const selectCurrentLocation = createSelector(pickupplace, location => location);
    const { currentLocation } = useSelector((state: any) => state.pickup.userLocations)

    console.log(selectCurrentLocation(state))
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
                    selectCurrentLocation(state).map(item => (
                        <Marker
                            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
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
