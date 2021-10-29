import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userProfileData: {
            fullName: "Humed Essie",
            email: "abc45171@gmail.com",
            phoneNumber: "0912974103",
            location: "Bole, Edna Mall",
        }
    },
    reducers: {},
})


export const { } = userSlice.actions
export default userSlice.reducer