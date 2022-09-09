import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api";
import { userEditReviewRating } from "../api/endPoints";
type payloadData={
    reviewId: string,
    rating: string | undefined,
    review: string
}
export const editReviewRatingList=createAsyncThunk("update review",async(payload:payloadData)=>{
    const response=await Api. post(userEditReviewRating,payload).then((res)=>{
        return res.data
    })
    return response
})