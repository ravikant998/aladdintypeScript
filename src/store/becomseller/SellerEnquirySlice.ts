import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { sellerEnquiry } from "../../api/endPoints";

export const sellerenquirydata = createAsyncThunk("seller", async (data:FormData) => {
    const response = await Api.post(sellerEnquiry,data).then((res) => {
console.log(res)
        return res.data
    })
  
    return response
})

