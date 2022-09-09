import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api";
import { userAddReviewsRating } from "../api/endPoints";
import { toast } from "react-toastify";
 type payloadData={
    serviceId: string | undefined,
    rating: string | undefined,
    review: string | undefined
 }
export const addUserReviewsRating=createAsyncThunk("userAddReviews",async(payload:payloadData)=>{
    const response=await Api.post(userAddReviewsRating,payload).then((res)=>{
        toast.success("Review submit successfull");
        return res.data
    })
    return response
})