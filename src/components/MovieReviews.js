// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => 
<div  className="review-list">
{reviews.map(review => 
    {
    return(
        <div className="review">
        <h1 className="review">{review.display_title}</h1>
        <img src={review.multimedia.src} alt=""/>
        <p>{review.summary_short}</p>
        </div>
    )
})
}
</div>

export default MovieReviews;