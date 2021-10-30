import { createSlice } from "@reduxjs/toolkit"

const PickupSllice = createSlice({
    name: "Pickup",
    initialState: {
        status: {
            pickupModalStatus: false,
            pickUpIconStatus: false,
            pickupIsChecked: false
        },
        sender: [

        ],
        pickupPlace: [

        ],
        vehicleId: "",
        userLocations: {
            currentLocation: {
                latitude: 8.9950409,
                longitude: 38.7850037,
                latitudeDelta: 0.021064477015438204,
                longitudeDelta: 0.02132675609124921,
            },
            selectedLocations: []
        }
    },
    reducers: {
        pickupToogleModal: (state) => {
            state.status["pickupModalStatus"] = !state.status.pickupModalStatus
        },
        pickupChangeIconStatus: (state) => {
            state.status["pickUpIconStatus"] = true
        },
        pickupChangeIsChecked: (state, action) => {
            if (action.payload == false) {
                state.status["pickupIsChecked"] = action.payload
            } else {

                state.status["pickupIsChecked"] = !state.status.pickupIsChecked
            }
        },
        handlePickupSender: (state: any, action) => {
            state.sender.push(action.payload);
        },
        removeSender: (state, action) => {
            state.sender.splice(action.payload, 1)
        },
        getVehicleId: (state, action) => {
            state.vehicleId = action.payload
        },
        pickupAddPickupPlace: (state, action) => {
            state.pickupPlace.push(action.payload)
        },
        pickupRemovePickupPlace: (state, action) => {
            state.pickupPlace.splice(action.payload, 1)
        },
        getUserCurrentLocation: (state, action) => {
            state.userLocations.currentLocation = action.payload
        },
        addSelectedLocation: (state, action) => {
            state.userLocations.selectedLocations.push(action.payload)
        },
        removeSelectedLocation: (state, action) => {
            state.userLocations.selectedLocations.splice(action.payload, 1)
        }
    }
})
export const {
    pickupToogleModal,
    getUserCurrentLocation,
    addSelectedLocation,
    removeSelectedLocation,
    pickupAddPickupPlace,
    pickupChangeIconStatus,
    pickupRemovePickupPlace,
    pickupChangeIsChecked,
    handlePickupSender,
    removeSender,
    getVehicleId
} = PickupSllice.actions
export default PickupSllice.reducer