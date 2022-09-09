import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getrecommendedservice } from "../api/endPoints";
import { RecommendedDataType } from "../allDataTypes/RecommendedService";

const initialState:RecommendedDataType=
[
    {
      _id:"" ,
      sellerId:"" ,
      title:"" ,
      categoryId:"",
      subcategoryId:"" ,
      fixedPrice:false ,
      forTime:"",
      description:"",
      remoteService:false,
      addressId:"" ,
      gallery:[],
      serviceCover: "",
      sellerData: [],
      addressData:[],
      wishlist: false,
      totalReview: 0,
      averageRating: null,
      serviceId:"" ,
      serviceCreatedDate:"" ,
      currency:"" ,
      minPrice: 0,
      maxPrice: 0,
      path:"" ,
      categoryName:"" ,
      subcategoryName: ""
    }
  ]

 export const recommendedServiceData=createAsyncThunk("recommended",async(payload:{serviceId:string |undefined,
        catId:string,subcatId:string})=>{
    const response=await Api.get(getrecommendedservice +`?serviceId=${payload.serviceId}&categoryId=${payload.catId}&subcategoryId=${payload.subcatId}`).then((res)=>{
        return res.data
    })
    return response.data
})
const recommendedServiceSlice=createSlice({
    name:'recommendedService',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(recommendedServiceData.fulfilled,(state,action)=>{
            state=action.payload;
            return state
        })
    }
})
export default recommendedServiceSlice.reducer

