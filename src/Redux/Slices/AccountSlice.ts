import { createSlice } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";


const AccountSlice = createSlice({
    name: "Account",
    initialState: {
        loggedIn: {
            status: true
        },
        userProfileData: {
            profileImage: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
            fullName: "Humed Essie",
            email: "abc45171@gmail.com",
            phoneNumber: "0912974103",
            location: "Bole, Edna Mall",
        },
    },
    reducers: {
        loggeIn: (state, action) => {
            state.loggedIn["status"] = action.payload
        },
        changeProfileImage: (state, action) => {
            state.userProfileData["profileImage"] = action.payload;
        }
    }
})


export const { loggeIn, changeProfileImage } = AccountSlice.actions

export default AccountSlice.reducer