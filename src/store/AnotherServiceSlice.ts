import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getanotherservicefromsameseller } from "../api/endPoints";
import { GetAnotherServiceDataType } from "../allDataTypes/AnotherServiceType";
const initialState:GetAnotherServiceDataType=[
     {
       _id:"",
       sellerId:"",
       title:"" ,
       categoryId:"",
       subcategoryId:"" ,
       fixedPrice: true,
       forTime:"",
       description:"",
       remoteService: false,
       addressId: "",
       gallery:[],
       serviceCover:"" ,
       sellerData:[],
       addressData:[],
       wishlist: false,
       totalReview: 0,
       averageRating:null ,
       serviceId: "",
       serviceCreatedDate:"",
       price:"",
       currency:"",
       path:"",
       categoryName: "",
       subcategoryName: ""
     }]
export  const anotherServiceData=createAsyncThunk("anotherservice",async(payload:{serviceId:string|undefined, sellerId:string|undefined})=>{
     const response=await Api.get(getanotherservicefromsameseller 
        + `?serviceId=${payload.serviceId}&sellerId=${payload.sellerId}`    
   ).then((res)=>{
        return res.data.data
    })
    return response
})

const anotherServiceSlice=createSlice({
     name:'another',
     initialState,
     reducers:{},
     extraReducers:(builder=>{
          builder.addCase(anotherServiceData.fulfilled,(state,action)=>{
              state=action.payload 
              return state
          })
     })
})
export default anotherServiceSlice.reducer
