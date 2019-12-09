// Code MovieReviews Here
import React from 'react'
const MovieReviews=({reviews})=>(
    <div className="review-list">{reviews.map((review,index)=>
        {return(
        <div key={index} className="review">
        <h1 >{review.display_title}</h1>
        <img src={review.multimedia.src} alt=""/>
        <p>{review.summary_short}</p>
        </div>
    )})}
    </div>
)
export default MovieReviews 
MovieReviews.defaultProps = {
    reviews: []
  };