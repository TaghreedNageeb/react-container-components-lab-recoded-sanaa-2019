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
          reviews:[],
          searchTerm:""
      }
    }
   
    handleSubmit=event=>{
        event.preventDefault()
      fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => 
            this.setState({ 
                reviews: data.result
             })
            )
    }
  
handlechange=event=>{
    this.setState({
        myReview :event.target.value
    })

   }
    render() {
      return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handlechange} value={this.state.searchTerm}/>
      <button> search</button>
          </form>
      <MovieReviews reviews={this.state.reviews}/>
      
      </div>
      )
    }
  }
   
  export default SearchableMovieReviewsContainer;