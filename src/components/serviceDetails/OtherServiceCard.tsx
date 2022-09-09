import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addtowishlistdata, removewishlistdata } from '../../store/AddToWishListSlice'
import { anotherServiceData } from '../../store/AnotherServiceSlice'
import { useAppDispatch } from '../../store/Hooks'


const OtherServiceCard = ({props}) => {
  // console.clear()
  // console.log(props)
  const {serviceId,sellerId}=useParams()
    const dispatch=useAppDispatch()
    const [wishListStatus, setwishListStatus] = useState<boolean>(props.wishlist) 
    // console.log("wishListStatus>>>>>",wishListStatus)
    const handleaddToWishList=(id:string)=>{
        if (localStorage.getItem("loginData")) {
          const payload = { serviceId: id };
          if (!wishListStatus) {
              dispatch(addtowishlistdata(payload))
              dispatch(anotherServiceData({serviceId,sellerId}))
              setwishListStatus(true)  
          } 
           else 
          { 
            dispatch(removewishlistdata(payload))
            dispatch(anotherServiceData({serviceId,sellerId}))
            setwishListStatus(false)
           }
      } 
      else {
        window.location.href = "/sign-in";
       }
    //    window.location.reload()
      }
  return (
    <div>
      <div>
        <div className="slide">
          <div className="card-wrap">
            <Link
              className="service-block"
              to={`/service-detail/${props.serviceId}/${props.sellerData[0]?._id}`}
            >
              <div className="service-image">
                <img
                  src={props.path + props.serviceCover}
                  alt="service-image"
                />
              </div>
            </Link>
            <div className="service-card">
              <div className="service-name">
                {props.title} {"\n"}
              </div>
              <div className="location">
                {props.addressData[0]?.countryName}
                {", "}
                {props.addressData[0]?.stateName}
              </div>
              <div className="address">
                {props.addressData[0]?.addressLine1}
                {",  "}
                {props.addressData[0]?.addressLine2}
              </div>
              <div className="seller-rating">
                <div className="rating-wrap">
                  <div className="rating-image">
                    <span
                      style={{
                        display: "inline-block",
                        direction: "ltr",
                      }}
                    >
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inlineblock",
                          position: "relative",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>
                          <img
                            src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg"
                            className="icon"
                          />
                        </span>
                        <span
                          style={{
                            display: "inlineblock",
                            position: "absolute",
                            overflow: "hidden",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                          }}
                        >
                          <img
                            src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                            className="icon"
                          />
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="rating-number">
                    {props.totalReview} reviews
                  </div>
                </div>
              </div>
              <div className="services-block">
                <div className="price">
                  $
                  {props.price ? (
                    props.price
                  ) : (
                    <h4>
                      {props.minPrice} {"-"}
                      {props.maxPrice}
                    </h4>
                  )}
                </div>
                <button
                  className="wishlist-btn"
                  onClick={() => handleaddToWishList(props._id)}
                >
                  <i className={
                    props.wishlist
                      ? "icon-heart add"
                      : "icon-heart"
                  }>
                    
                  </i>
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherServiceCard