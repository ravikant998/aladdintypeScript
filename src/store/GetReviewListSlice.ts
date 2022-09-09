import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReviewListType } from "../allDataTypes/GetReviewListType";
import { Api } from "../api";
import { getreviewlist } from "../api/endPoints";

 const initialState:ReviewListType=
 [
    {
      _id:"" ,
      userId:"" ,
      serviceId:"" ,
      review:"" ,
      rating: 0,
      createdAt: "",
      title: "",
      firstName: "",
      lastName: "",
      path: ""
    }
  ]

export const getreviewlistdata=createAsyncThunk("get review",async(serviceId:string|undefined)=>{
    const response=await Api.get(getreviewlist +`?serviceId=${serviceId}`).then((res)=>{
        return res.data.data
    })
    return response
})

const reviewListSlice=createSlice({
    name:'reviewlist',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getreviewlistdata.fulfilled,(state,action)=>{
            state=action.payload;
            return state
        })
    }
})
export default reviewListSlice.reducer