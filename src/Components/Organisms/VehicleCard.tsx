import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight } from "react-native"
import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import Image from '@Components/Atoms/Image'
import { colors } from '@Utils/Color/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicleId } from '@Redux/Slices/PickUpSlice'




const VehicleCard = ({ index, item, handleClick }) => {
    const dispatch = useDispatch()
    const { vehicleId } = useSelector((state: any) => state.pickup)

    console.log(vehicleId)

    return (
        <TouchableHighlight underlayColor={colors.white} onPress={() => {
            handleClick(index)
            dispatch(getVehicleId(item.id))
        }} >
            <CardConatiner borderTopWidth={item.status && "3px"} borderColor={item.status && colors.gray} padd="10px" justify="space-around" width="130px" height="90px">
                <Image width={100} source={{
                    uri: `${item.uri}`,
                }} />
            </CardConatiner>

        </TouchableHighlight>
    )
}



export default VehicleCard
