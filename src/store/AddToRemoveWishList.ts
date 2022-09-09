import { createSlice } from "@reduxjs/toolkit";
 
const initialState={}

const addremovewishlistSlice=createSlice({
  name:'adremovewishlist',
  initialState,
  reducers:{
    getservicedataAction:(state,action)=>{
        console.log("action.payload",action.payload)
        state=action.payload
        console.log(state)
        return state
       
    }
  }
}   
)
export default addremovewishlistSlice.reducer
export const {getservicedataAction}=addremovewishlistSlice.actions