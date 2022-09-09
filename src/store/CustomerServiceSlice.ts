import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api";
import { customercontact } from "../api/endPoints";

export const customercontactdata=createAsyncThunk("customer",async(payload:FormData)=>{
    const response=await Api.post(customercontact,payload).then((res)=>{
        return res.data
    })
    return response
})