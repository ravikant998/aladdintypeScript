import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useAppDispatch} from '../../store/Hooks'
import { addtowishlistdata, removewishlistdata } from '../../store/AddToWishListSlice'
import Loader from '../loader/Loader'


const ServiceCard = ({item}) => {
  const dispatch=useAppDispatch()
  const[isLoding,setIsLoding]=useState(false)
  const [wishListStatus, setwishListStatus] = useState<boolean>() 
// console.log("wishListStatus",wishListStatus)
 const heartIconClicked = (items: string) => {
  setIsLoding(true)
  if (localStorage.getItem("loginData")) {
      const payload = { serviceId: items };
      if (!wishListStatus) {
          setTimeout(() => {
            dispatch(addtowishlistdata(payload))
          setwishListStatus(true)
            setIsLoding(false)
          }, 2000);  
      } 
       else 
      { 
        dispatch(removewishlistdata(payload))
        setwishListStatus(false)
        setTimeout(() => {
          setIsLoding(false)
        }, 2000);
       
       }
  } 
  else { 
    window.location.href = "/sign-in";
   }
}
useEffect(()=>{
  setTimeout(() => {
    setwishListStatus(item?.wishlist)
  }, 100);  
},[item])

/// Not in used now
// useEffect(()=>{
//  dispatch( getservicedataAction(heartIconClicked))
// },[dispatch,heartIconClicked])
  return (
    <div> 
            <div className="sub-category_wrapper">
            {
        isLoding ? <Loader /> : null
      }
            <Link
              to={`/service-detail/${item.serviceId}/${item.sellerData[0]?._id}`}>
               <div className="service-image">
                    <img src={item.path + item.serviceCover} alt="service" />
                  </div>
                  </Link>
              <div className="service-card">
                <div className="service-name">{item.title}</div>
                <div className="provider-info">{item.sellerData?.businessName}</div>
                <div className="seller-rating">
                  <div className="rating-wrap">
                  <div className="rating-wrap">
                  <div className="rating-image">
                        <span
                          style={{
                            display: "inlineblock",
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
                            <span>
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
                                width: "0%",
                              }}
                            >
                              <img
                                src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                                className="icon"
                              />
                            </span>
                          </span> 
                          <span
                            style={{
                              cursor: "inherit",
                              display: "inlineblock",
                              position: "relative",
                            }}
                            >
                            <span>
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
                                width: "0%",
                              }}
                            >
                              <img
                                src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                                className="icon"
                              />
                            </span>
                          </span> 
                          <span
                            style={{
                              cursor: "inherit",
                              display: "inlineblock",
                              position: "relative",
                            }}
                            >
                            <span>
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
                                width: "0%",
                              }}
                            >
                              <img
                                src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                                className="icon"
                              />
                            </span>
                          </span> 
                        
                         <span
                            style={{
                              cursor: "inherit",
                              display: "inlineblock",
                              position: "relative",
                            }}
                            >
                            <span>
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
                                width: "0%",
                              }}
                            >
                              <img
                                src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                                className="icon"
                              />
                            </span>
                          </span> 
                          <span
                            style={{
                              cursor: "inherit",
                              display: "inlineblock",
                              position: "relative",
                            }}
                             >
                            <span>
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
                                width: "0%",
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
                    </div>
                  </div>
                  <div className="rating-number">{item.totalReview} reviews</div>
                  <div className="services-block">
                    <div className="price">
                    {item?.currency ? item?.currency : "$"}
                   
                     
                {item?.fixedPrice
                  ? item?.price
                  : item?.minPrice +
                    "-" +
                    item?.maxPrice}
                      </div>
                     
                  <button className="wishlist-btn"
                          onClick={() => { heartIconClicked(item._id) }}>
                       
                            <i className={`${wishListStatus ? "icon-heart add" : "icon-heart"}`} >
                          
                            </i>
                        </button>
                  </div>
                </div>
              </div>
          
          </div>
      
  
    </div>

  );
}

export default ServiceCard
