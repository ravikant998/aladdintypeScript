import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getState } from "../api/endPoints";
import { Statenametype } from "../allDataTypes/StateNameType";
type StateNameType={
    countryId:string
}
const initialState: Statenametype = [
    {
        _id: "",
        status: true,
        deletedAt: 0,
        name: "",
        countryId: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
    }
]

export const statename = createAsyncThunk("state", async (payload:StateNameType) => {
    const response = await Api.post(getState, payload).then((res) => {
        return res.data.data
    })
    return response
})

const stateSlice = createSlice({
    name: 'statename',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(statename.fulfilled, (state, action) => {
            state = action.payload;
            return state
        })
    }
})

export default stateSlice.reducer


