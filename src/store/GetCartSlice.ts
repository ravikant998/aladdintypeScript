import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  GetCartDetailsType } from "../allDataTypes/GetCartDataType";
import { Api } from "../api";
import { getCartData } from "../api/endPoints";


const initialState:GetCartDetailsType=[{
    _id: "",
    quantity: 1,
    fromInvoice: true,
    sellerData: [],
    serviceId:"" ,
    fixedPrice: true,
    serviceTitle:"" ,
    serviceDeletedAt: "",
    serviceStatus: true,
    serviceCover:"" ,
    price: "",
    currency:"",
    sellerId:"" ,
    path: ""
}]
export const getcartActions=createAsyncThunk("getcart",async()=>{
    const response=await Api.post(getCartData).then((res)=>{
        return res.data.data
    })
    return response
})

const getCartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{},
extraReducers:(builder)=>{
    builder.addCase(getcartActions.fulfilled,(state,action)=>{
        state=action.payload;
        return state
    })
}
})
const getCartSliceReducer =  getCartSlice.reducer
export default getCartSlice.reducer
