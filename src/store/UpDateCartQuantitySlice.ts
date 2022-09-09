import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { updateCartQuantity } from "../api/endPoints";

type payloadQuantity={
    cartId: String
    quantity:Number|BigInt,
}
const initialState={}
export const updatetQuantityCart=createAsyncThunk("updatecartdata",async(payload:payloadQuantity)=>{
    const response=await Api.post(updateCartQuantity,payload).then((res)=>{
        return res.data    
    })
    return response
})
const updateCartSlice=createSlice({
    name:'updatecart',
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(updatetQuantityCart.fulfilled,(state,action)=>{
            state=action.payload;
            return state
        })
    }
})
export const updateCartSliceReducers=updateCartSlice.reducer