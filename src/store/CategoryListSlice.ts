import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getcategory } from "../api/endPoints";
import { CategotyType } from "../allDataTypes/CategoryDataType";

const initialState:CategotyType=[{
    _id: "",
      translationData:[],
      status: true,
      deletedAt: 0,
      name: "",
      slug: "",
      description: "",
      metaTitle:"",
      metaKeyword:"",
      metaDescription:"",
      createdAt: "",
      updatedAt:"",
      __v: 0,
      categoryBanner:"",
      categoryBannerMobile: "",
      categoryIcon:"",
      categoryIconMobile:"",
      path: ""
}]
export const categorylistdata=createAsyncThunk("category",async()=>{
    const response=await Api.get(getcategory).then((res)=>{
        return res.data.data
    })
    return response
})

const categorylistSlice=createSlice({
    name:'categoryname',
    initialState,
    reducers:{    
    },
    extraReducers:(builder)=>{
        builder.addCase(categorylistdata.fulfilled,(state,action)=>{
            state=action.payload;
            return state;
        })
        
    }
})
export default categorylistSlice.reducer;