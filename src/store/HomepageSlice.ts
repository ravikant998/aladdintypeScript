import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gethomepage } from "../api/endPoints";
import { Api } from "../api/index";
import { Gethomepagetype } from "../allDataTypes/GetHomePageDataType";

const initialState: Gethomepagetype = {
  bannerData: [],
  bannerImagePath: "",
  bottomAdvertiserBannerData: [],
  categoryData: [],
  categoryImagePath: "",
  subcategoryData: [],
  subcategoryImagePath: "",
  topAdvertiserBannerData: [],
};

export const homepage = createAsyncThunk("homepageStatus", async () => {
  const res = await Api.get(gethomepage).then((res) => res.data.data);
  return res;
});

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(homepage.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default homepageSlice.reducer;
