import { createSlice } from "@reduxjs/toolkit"

const ReportSlice = createSlice({
    name: "report",
    initialState: {
        report: {
            status: false,

        },
    },
    reducers: {
        toogleReport: (state) => {
            const newState = { ...state.report }
            newState["status"] = !newState.status
            state.report = newState
        }
    }
})
export const { toogleReport } = ReportSlice.actions
export default ReportSlice.reducer