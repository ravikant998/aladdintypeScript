import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api";
import { removeDataFromCart } from "../api/endPoints";

type cartIdType={
    cartId:string
}
export const removeCartFromCardList=createAsyncThunk("removecart",async(payload:cartIdType)=>{
    const response=await Api.post(removeDataFromCart,payload).then((res)=>{
        return res.data
    })
    return response
})