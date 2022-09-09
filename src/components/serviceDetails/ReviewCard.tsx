import React, { useEffect, useRef, useState } from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { addUserReviewsRating } from '../../store/UserAddreviewratingSlice';
import { ToastContainer } from "react-toastify";
import { getreviewlistdata } from '../../store/GetReviewListSlice';
import ReviewCat from '../../pages/serviceDetailDropDown/ReviewCat';


const ReviewCard= () => {
    const { serviceId } = useParams()
    let navigate = useNavigate();
    const dispatch = useAppDispatch()
    const ref=useRef(null)
    const [reviewText, setReviewText] = useState("");
    const [starRating, setStarRating] = useState();
    const getReviewList=useAppSelector((state)=>state.reviewList)

    const ratingChange=(val:any)=>{
        setStarRating(val)
    }
    const reviewSubmit = (e: any) => {
        e.preventDefault();
        if(!localStorage.getItem("loginData")) {
            navigate("/sign-in");
        } else {
            let payload = {
                serviceId: serviceId,
                rating: starRating,
                review: reviewText,
            };
            dispatch(addUserReviewsRating(payload))    
        };
    }
    useEffect(() => {
        dispatch(getreviewlistdata(serviceId))
    }, [dispatch])

    return (
            <div className="reviews">
                <div className="review-head">
                    <h2>Reviews</h2>
                </div>
              {
                   getReviewList && getReviewList.map((items,index)=>{
                   return(
                <div className="reviews-wrap" key={index}>
                    <div className="review-box">
                        <div className="review-logo">
                            <div className="text-image">{items.firstName}</div>
                        </div>
                        <div className="review-text">
                            <div className="review-details">
                                <div className="review-info">
                                    <ul className="tests-wrap">
                                        <li>{items.title}</li>
                                    </ul>
                                    <div className="review-name">{items.firstName}{''} {items.lastName}</div>
                                    <div className="review-timing">{items.createdAt}</div>
                                </div>
                                <div className="review-rating">
                                    <span style={{ display: "inline-block", direction: "ltr" }}>
                                    </span>
                                    <ReactStars 
                                         size={30}
                                         value={items.rating}
                                         edit={false}
                                         isHalf={true}
                                    />
                                </div>
                            </div>
                            <p style={{textAlign:"left"}}>{items.review}</p>
                        </div>
                        <div className="more-wrap">
                        <ReviewCat 
                         getrewview={items}
                         />
                        </div>
                        
                    </div>
                </div>
                   )
                   }) 
                } 
               
                <div className="add-review">
                    <div className="review-logo">
                        <div className="text-image">G</div>
                    </div>
                    <div className="add-form">
                        {/* <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                        /> */}
                        <form >
                            <div className="form-wrap">
                                <div className="textarea-wrap">
                                    <textarea
                                        value={reviewText}
                                        className="textarea"
                                        placeholder="Write a review"
                                        onChange={(e) => setReviewText(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                                <div className="rate-service">
                                    <h4>Rate the service:</h4>
                                    <div className="rate-image">
                                        <div className="rating-image">
                                            <span style={{ display: "inline-block", direction: "ltr" }}>
                                            <ReactStars                  
                                              size={25}
                                              value={starRating}
                                              edit={true}
                                              isHalf={true}
                                              onChange={ratingChange}
                                            />
                                            </span>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="submit"
                                className="btn"
                                onClick={reviewSubmit}
                                value="Add a Review" />
                        </form>
                    </div>
                </div>
            </div>
      
    )
}

export default ReviewCard