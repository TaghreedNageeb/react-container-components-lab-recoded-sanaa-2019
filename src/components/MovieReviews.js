// Code MovieReviews Here
import React from 'react'
const MovieReviews=({reviews})=>(
    <div className="review-list">{reviews.map(review=>
        {return(
        <div className="review-list">
        <h1 className="review">{review.display_title}</h1>
        <img src={review.multimedia.src} alt=""/>
        <h2>{review.summary_short}</h2>
        <a href={review.link.url}> run</a>
        </div>
    )})}
    </div>
)
export default MovieReviews 
MovieReviews.defaultProps = {
    reviews: []
  };