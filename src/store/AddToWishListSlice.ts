import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnyObject } from "yup/lib/types";
import { Api } from "../api";
import { addtowishlist } from "../api/endPoints";
import { removefromwishlist } from "../api/endPoints";

export const addtowishlistdata=createAsyncThunk("addwishlist",async(payload:{ serviceId: string })=>{
    const response=await Api.post(addtowishlist,payload).then((res)=>{
        return res.data
    })
    return response
})
export const removewishlistdata=createAsyncThunk("",async(payload:{ serviceId:string })=>{
    const response=await Api.post(removefromwishlist,payload).then((res)=>{
        return  res.data
    })
    return response
})