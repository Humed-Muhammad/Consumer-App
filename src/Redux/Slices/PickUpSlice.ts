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
        vehicleId: ""
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
        }
    }
})
export const {
    pickupToogleModal,
    pickupAddPickupPlace,
    pickupChangeIconStatus,
    pickupRemovePickupPlace,
    pickupChangeIsChecked,
    handlePickupSender,
    removeSender,
    getVehicleId
} = PickupSllice.actions
export default PickupSllice.reducer