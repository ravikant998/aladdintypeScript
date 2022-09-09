import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getcountry } from "../api/endPoints";
import { CountryListDataType } from "../allDataTypes/CountryListtype";


const initialState:CountryListDataType={
data:[],
}

export const countrylist= createAsyncThunk("country",async()=>{
    const response=await Api.get(getcountry).then((res)=>{
        return res.data
    })
    // console.log(response)
    return response
})

const getcountrySlice=createSlice({
    name:'countryname',
    initialState,
    reducers:{
    },
     extraReducers: (builder) => {
    builder.addCase(countrylist.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
})
export default getcountrySlice.reducer;
