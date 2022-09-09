import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/index";
import { userlogin } from "../api/endPoints";
import { LoginType } from "../allDataTypes/LoginType";

// const initialState:LoginType={
//     email:'',
//     password: '',
//     privacyPolicy:'',
// }

export const login = createAsyncThunk("login", async (data:LoginType) => {
 const response= await Api.post(userlogin,data).then((res) => {
  console.log("RES>>>",res)
    if(res.data.data.token){
      localStorage.setItem("loginData",res.data.data.token); 
    }
    return res.data.data
  });
  return response

});

// const userloginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {},
//   extraReducers:(builder)=>{
//     builder
//      .addCase(login.fulfilled,(state,action)=>{
//        state=action.payload;
//       return state

//   })
//   }
// });
