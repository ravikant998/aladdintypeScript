import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { Api } from "../api";
import { addtocart } from "../api/endPoints";
import { AddToCartDataType } from "../allDataTypes/AddToCartType";

type AddTocartDataType={
    serviceId:string,
    quantity: number
}
 export const addToCartData=createAsyncThunk("add product",async(payload:AddTocartDataType)=>{
    const response=await Api.post(addtocart,payload).then((res)=>{
        return res.data
    })
    return response
})


