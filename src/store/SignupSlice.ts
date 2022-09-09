import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersignup } from "../api/endPoints";
import { Api } from "../api/index";
import { SignupType } from "../allDataTypes/SignUpType";

const initialState: SignupType = {
  firstName: "",
  lastName: "",
  phone: 0,
  email: "",
  password: "",
  re_password: "",
  privacyPolicy:"",
  type: "",
};
export const signupuser = createAsyncThunk(
  "createuser",
  async (data: SignupType) => {
    const response = await Api.post(usersignup, data).then((res) => {
      return res.data;
    });
    return response;
  }
);

const signupSlice = createSlice({
  name: "signupdata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupuser.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export default signupSlice;
