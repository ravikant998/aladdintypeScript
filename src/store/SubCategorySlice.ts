import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api";
import { getvalidservicecategory } from "../api/endPoints";
import { Servicesubcategorytype } from "../allDataTypes/SubcategoryType";
const initialState:Servicesubcategorytype=
[{
      _id: "",
      translationData:[],
      status: true,
      deletedAt: 0,
      name:"",
      slug:"",
      description:"",
      metaTitle: "",
      metaKeyword:"",
      metaDescription:"",
      categoryId:"",
      createdAt:"",
      updatedAt: "",
      __v: 0,
      subcategoryBanner:"",
      subcategoryBannerMobile:"",
      subcategoryIcon: "",
      subcategoryIconMobile:"",
      path:""
}]
 export const subcategoryvalidservice=createAsyncThunk("subcategory",async(catId:string)=>{
    const response=await Api.get(getvalidservicecategory + "?categoryId=" + `${catId}`).then((res)=>{
        return res.data.data
    })
    return response
})

const servicesubcategorySlice=createSlice({
    name:'subcategorydata',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder.addCase(subcategoryvalidservice.fulfilled,(state,action)=>{
        state=action.payload;
        return state
       })
    }
})
export default servicesubcategorySlice.reducer