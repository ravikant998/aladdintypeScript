import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/index";
import { userprofiledetails } from "../api/endPoints";
import { Userdata } from "../allDataTypes/GetHomePageDataType";

const initialState:Userdata =[{ 
      email:"",
      firstName: "",
      lastName:"",
      path:"",
      phone:'',
      phoneNumberVerified:"",
      type:""
      }
] 
 export const userdetails=createAsyncThunk("userprofile",async()=>{
    const response=await Api.get(userprofiledetails).then((res)=>{
        return res.data.data      
    })
    return response;
})
  
  const getuserdetailSlice=createSlice({
  name:'userdetail',
  initialState,
  reducers:{
  },
    extraReducers:(builder)=>{
        builder
        .addCase(userdetails.fulfilled,(state,action)=>{
            state=action.payload;
            return state
        })
        
    }

})
export default getuserdetailSlice.reducer