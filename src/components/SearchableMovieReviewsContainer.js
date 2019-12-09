import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Her
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        searchTerm:"",
          reviews: []
      }
    }
   
    handleSubmit=event=>{
        event.preventDefault()
        const q=`${URL}&query=${this.state.searchTerm}`
      fetch(q)
        .then(response => response.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.result }))
    }
  
handlechange=event=>{
    this.setState({
        [event.target.name]:event.target.value
    })

   }
    render() {
      return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="item" onChange={this.handlechange} value={this.state.searchTerm}/>
      <button> search</button>
          </form>
      <MovieReviews reviews={this.state.reviews}/>
      
      </div>
      )
    }
  }
   
  export default SearchableMovieReviewsContainer;