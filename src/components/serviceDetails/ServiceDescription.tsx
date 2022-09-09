import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { servicedetailsdata } from '../../store/ServiceDetailsSlice'
import { useAppDispatch, useAppSelector } from '../../store/Hooks'
import { addtowishlistdata, removewishlistdata } from '../../store/AddToWishListSlice'
import { anotherServiceData } from '../../store/AnotherServiceSlice'
import { recommendedServiceData } from '../../store/GetRecommendedServiceSlice'
import Loader from '../loader/Loader'
import { addToCartData } from '../../store/AddToCart'
import { ServiceDescriptionType } from '../../allDataTypes/ServiceDescriptionType'
import ReviewCard from './ReviewCard'
import OtherService from './OtherService'
import RecommendedService from './RecommendedService'
import { getcartActions } from '../../store/GetCartSlice'

const ServiceDescription = ({ serviceData }) => {
  const { serviceId, sellerId } = useParams()
  const dispatch = useAppDispatch()
  const [cartdata, setCartdata] = useState<boolean>();
  const [wishListStatus, setwishListStatus] = useState<boolean>()
  const [isLoading, setIsLoading] = useState(false);
  let catId = serviceData.categoryId;
  let subcatId = serviceData.subcategoryId;

  useEffect(() => {
    dispatch(servicedetailsdata(serviceId))
    dispatch(anotherServiceData({ serviceId, sellerId }))
    if (catId && subcatId) {
      dispatch(recommendedServiceData({ serviceId, catId, subcatId }))
    }
  }, [dispatch, sellerId, serviceId, catId, subcatId])

  const addToWishList = (id: string) => {
    if (localStorage.getItem("loginData")) {
      const payload = { serviceId: id };
      if (!wishListStatus) {
        dispatch(addtowishlistdata(payload))
        setwishListStatus(true)
      }
      else {
        dispatch(removewishlistdata(payload))
        setwishListStatus(false)
      }
    }
    else {
      window.location.href = "/sign-in";
    }
    window.location.reload()
  }

  useEffect(() => {
    setwishListStatus(serviceData?.wishlist)
    setCartdata(serviceData?.cart)
  }, [serviceData])

  const handleaAddToCart = (id: any, serviceata: ServiceDescriptionType) => {
    if (localStorage.getItem("loginData")) {
      const payload = {
        serviceId: id,
        quantity: 1
      }
      dispatch(addToCartData(payload))
      dispatch(getcartActions())
      setCartdata(true);
    }
    else {
      let payload1 = {
        serviceTitle: serviceData.title,
        serviceCover: serviceData.serviceCover,
        path: serviceData.path,
        categoryName: serviceData.categoryName,
        serviceId: serviceData._id,
        price: serviceData.price,
        sellerData: serviceData.sellerData,
        quantity: 1,
        _id: serviceData._id,
      }
      // if(!cartdata){

      //   let cart=JSON.parse(localStorage.getItem("ala_cart")|| "")
      //   if(!cart){
      //     localStorage.setItem("ala_cart",JSON.stringify([payload1]))
      //   }
      //   else{
      //     localStorage.setItem("ala_cart",JSON.stringify([...cart,payload1]))
      //   }
      // }

    }
  }


  return (
    <div>

      <div className="tab-content">
        <div
          id="uncontrolled-tab-example-tabpane-description"
          aria-labelledby="uncontrolled-tab-example-tab-description"
          className="tab-pane active"
        >
          <div className="description-wrap listing">
            {isLoading ? <Loader /> : null}
            <div className="image-block">
              <div className="image-wrap">
                <img
                  src={serviceData.path + serviceData.serviceCover}
                  alt="profile-image"
                />
              </div>

              {serviceData.price ? (
                cartdata ? (
                  <Link to="/user/cart" className="btn">
                    Go to cart
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() =>
                      handleaAddToCart(serviceData._id, serviceData)
                    }
                  >
                    Add to cart
                  </button>
                )
              ) : null}
              <button
                className="white-btn"
              // onClick={() => ChatWithSellers(servicedetails._id)}
              >
                Chat with Seller
              </button>
            </div>

            <div className="seller-details">
              <div className="details-head">
                <div className="main-head">
                  <div className="seller-btns">
                    <button className="btn-wrap"
                      onClick={() => addToWishList(serviceData._id)}
                    >
                      <i
                        className={
                          serviceData.wishlist
                            ? "icon-heart add"
                            : "icon-heart"
                        }
                      >
                      </i>
                      {serviceData.wishlist
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"}

                    </button>
                    <div>
                      <button className="btn-wrap">
                        <i className="icon-share"></i>Share This Service
                      </button>
                    </div>
                  </div>

                  <h2>{serviceData.title}</h2>
                  <h3>{serviceData.sellerData?.[0]?.businessName}</h3>
                </div>
                <div className="pricing-wrap">
                  $
                  {serviceData.price ? (
                    serviceData.price
                  ) : (
                    <h4>
                      {serviceData.minPrice} {"-"}
                      {serviceData.maxPrice}
                    </h4>
                  )}
                  <span className="timer"></span>
                </div>
              </div>
              <div className="seller-rating">
                <div className="rating-wrap">
                  <div className="rating-image">
                    {/* <span
                      style={{
                        display: "inlineblock",
                        direction: "ltr",
                      }}
                        >
                      <Rating
                        readonly
                        placeholderRating={
                          servicedata?.averageRating
                            ? servicedata?.averageRating
                            : 0
                        }
                        emptySymbol={<img src={emptyStar} className="icon" />}
                        placeholderSymbol={
                          <img src={fullStar} className="icon" />
                        }
                        fullSymbol={<img src={fullStar} className="icon" />}
                      />
                    </span> */}
                  </div>
                  <div className="rating-number">
                    {serviceData.totalReview}
                    reviews
                  </div>
                </div>
              </div>
              <div className="details-wrap">
                <div className="detail-list">
                  <h3>Address:</h3>
                  <ul className="details-values">
                    <li>
                      <div className="detail-text">
                        {serviceData?.addressData?.[0]?.countryName} {serviceData?.addressData?.[0]?.stateName}
                      </div>
                    </li>
                    <li>
                      <div className="detail-text">
                        {serviceData?.addressData?.[0]?.addressLine1}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail-list">
                  <h3>Days Opened</h3>
                  <ul className="details-values">
                    <li>
                      <div className="detail-text">
                        <span className="day-name">Monday-Wednesday</span>
                        <span className="timing">9:00 a.m. — 6:00 p.m.</span>
                      </div>
                    </li>
                    <li>
                      <div className="detail-text">
                        <span className="day-name">Thursday-Sunday</span>
                        <span className="timing">Closed</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <p>{serviceData.description}</p>
            </div>
          </div>
        </div>
        <OtherService />
        <RecommendedService />
        <ReviewCard />
      </div>
    </div>
  )
}

export default ServiceDescription




