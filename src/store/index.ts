import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./HomepageSlice";
import getuserdetailSlice from "./UserDetailprofileSlice";
import getcountrySlice from "./CountryListSlice"
import CategoryListSlice from "./CategoryListSlice";
import getservicedataSlice from "./GetServiceSlice"
import GetStateSlice from "./GetStateSlice";
import getcitySlice from "./GetCityNameSlice";
import validservicesubcategorySlice from "./SubCategorySlice"
import ServiceDetailsSlice from "./ServiceDetailsSlice";
import AnotherServiceSlice from "./AnotherServiceSlice";
import recommendedServiceSlice from "./GetRecommendedServiceSlice";
import reviewListSlice from "./GetReviewListSlice"
import getCartSliceReducer from "./GetCartSlice";
import { updateCartSliceReducers } from "./UpDateCartQuantitySlice";
const store = configureStore({
    reducer: {
        homepage: homepageSlice,
        userprofiledetails: getuserdetailSlice,
        countrydata: getcountrySlice,
        categoryList: CategoryListSlice,
        validseticecatgory:validservicesubcategorySlice,
        state: GetStateSlice,
        city: getcitySlice,
        servicesubcategory:getservicedataSlice,
        servicedata:ServiceDetailsSlice,
        anotherService:AnotherServiceSlice,
        recommendedService:recommendedServiceSlice,
       reviewList:reviewListSlice,
       GetCartSliceReducer:getCartSliceReducer,
       UpdateCartSliceReducers:updateCartSliceReducers
       
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store