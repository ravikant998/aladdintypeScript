import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import { getreviewlistdata } from '../../store/GetReviewListSlice';
import { useAppDispatch } from '../../store/Hooks';
import { editReviewRatingList } from '../../store/UpdateReviewList';


const EditReviewList = ({ getreview, setShowMenu, setShowEditModal }) => {
    console.log("getreview", getreview)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [reviewText, setReviewText] = useState("");
    const [starRating, setStarRating] = useState();

    const reviewEditSubmit = (e: any) => {
        e.preventDefault()
        if (!localStorage.getItem("loginData")) {
            navigate("/sign-in")
        }
        else {
            let payload = {
                reviewId: getreview._id,
                rating: starRating,
                review: reviewText
            }
            dispatch(editReviewRatingList(payload))
            dispatch(getreviewlistdata(getreview.serviceId))
            setShowMenu(false)
            setShowEditModal(false)
        }
    }
    useEffect(() => {
        setReviewText(getreview.review)
        setStarRating(getreview.rating)
    }, [getreview])

    const ratingChange = (val: any) => {
        setStarRating(val)
    }
    return (
        <div className="modal-backdrop" style={{ zIndex: '2' }}>
            <div className="cancel-order">
                <h3>Edit Review</h3>
                <form>
                    <div className="input-wrapper">
                        <div className="input-wrap mb-3">
                            <textarea className="form-control"
                                placeholder="Write a review"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="rate-service">
                            <h4>Rate the service:</h4>
                            <div className="rate-image">
                                <div className="rating-image">
                                    <span style={{ display: "inline-block", direction: "ltr" }}>
                                    </span>
                                    {starRating && <ReactStars
                                        size={25}
                                        value={starRating}
                                        edit={true}
                                        isHalf={true}
                                        onChange={ratingChange}
                                    />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" onClick={reviewEditSubmit} className="btn" value="Add a Review" />
                </form>
            </div>
        </div>

    )
}

export default EditReviewList