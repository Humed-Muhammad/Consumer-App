import { createSelector } from "@reduxjs/toolkit"

// Pickup location markers and all places
export const pickupPlaces = (state) => {
    const pickupplace = (state) => state.pickup.pickupPlace
    const pickupMarkerLocations = createSelector(pickupplace, location => location);

    return pickupMarkerLocations(state)
}

// dropofff location markers and all places
export const dropoffPlaces = (state) => {
    const dropoffPlace = (state) => state.dropoff.dropoffPlace
    const dropoffMarkerLocations = createSelector(dropoffPlace, location => location)

    return dropoffMarkerLocations(state)
}



// /**Pickup selectors **/

// //Pickup place
// export const pickupPlace = (state)=>{
//     const 
// }
