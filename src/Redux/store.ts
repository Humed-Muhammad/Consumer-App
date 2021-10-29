import { configureStore } from "@reduxjs/toolkit"
import color from "@Redux/Slices/ColorSlice"
import report from "@Redux/Slices/ReportSlice"
import pickup from "@Redux/Slices/PickUpSlice"
import account from "@Redux/Slices/AccountSlice"
import dropoff from "@Redux/Slices/DropoffSlice"

export default configureStore({
    reducer: {
        color,
        report,
        pickup,
        account,
        dropoff,
    }
})