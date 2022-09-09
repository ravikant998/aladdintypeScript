import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { servicedetails } from "../api/endPoints";

import { ServiceDescriptionType } from "../allDataTypes/ServiceDescriptionType";
const initialState:ServiceDescriptionType={
  _id:"" ,
  sellerId:"" ,
  title:"" ,
  categoryId:"" ,
  subcategoryId:"" ,
  fixedPrice: true,
  forTime:"" ,
  description: "",
  remoteService: true,
  addressId: "",
  gallery:[],
  serviceCover:"",
  sellerData:[],
  addressData:[],
  sellerInformationData: [],
  wishlist: true,
  cart: true,
  totalReview: 0,
  averageRating: null,
  serviceId: "",
  serviceCreatedDate:"" ,
  currency: "",
  minPrice: 0,
  maxPrice: 0,
  path:"" ,
  categoryName:"" ,
  subcategoryName: "",
  price:""  
}

  export const servicedetailsdata=createAsyncThunk("service",async(id:string|undefined)=>{
    const resonse=await Api.get(servicedetails +`?serviceId=${id}`
    ).then((res)=>{
        return res.data.data
    })
    return resonse
 })
 
 const servicedetailSlice=createSlice({
  name:"servicedata",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(servicedetailsdata.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
 })

 export default servicedetailSlice.reducer