import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getcity } from "../api/endPoints";
import { CitlistType } from "../allDataTypes/CityListType";

type CityNameType={
    countryId: string
    stateId: string
}
const initialState: CitlistType = [
    {
        _id: "",
        status: true,
        deletedAt: 0,
        name: "",
        countryId: "",
        stateId: "",
        createdAt: "",
        updatedAt: "",
        __v: 0

    }]

export const citynamedata = createAsyncThunk("city", async (payload: CityNameType) => {
    const response = await Api.post(getcity, payload).then((res) => {
        return res.data.data
    })
    return response
})

const getcitySlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(citynamedata.fulfilled, (state, action) => {
            state = action.payload
            return state
        })
    }
})

export default getcitySlice.reducer