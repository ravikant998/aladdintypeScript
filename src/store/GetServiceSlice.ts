import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getservice } from "../api/endPoints";
import { Api } from "../api";
import { GetServiceListType } from "../allDataTypes/ServiceDatatypes";

const initialState:GetServiceListType=[{
    _id:"" ,
    sellerId:"" ,
    title:"" ,
    categoryId:"" ,
    subcategoryId: "",
    fixedPrice: true,
    forTime:"" ,
    description:"" ,
    remoteService: true,
    addressId: "",
    gallery:[],
    serviceCover: "",
    sellerData:[],
    addressData:[],
    wishlist: true,
    totalReview: 1,
    averageRating: 1,
    serviceId: "",
    serviceCreatedDate: "",
    price:"" ,
    currency:"",
    path:"" ,
    categoryName:"" ,
    subcategoryName:""
}]
export const getservicedata=createAsyncThunk("service",async(payload: {catid: string, subcatid: string})=>{
    const response=await Api.post(
        getservice + `?categoryId=${payload.catid}&subcategoryId=${payload.subcatid}`,
        ).then((res)=>{
        return res.data.data
    })
    return response
})

const getservicedataSlice=createSlice({
   name:'servicedata',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(getservicedata.fulfilled,(state,action)=>{
        state=action.payload;
        return state
    })
   }  
})
export default getservicedataSlice.reducer;