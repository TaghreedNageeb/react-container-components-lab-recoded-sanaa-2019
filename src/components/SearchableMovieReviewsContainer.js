import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            reviews:[],
            searchTerm:''
        }
    }
    myFetch = () =>{
      fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.result }))
    }

    handleChange = event =>{
        this.setState({
            searchTerm:event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.myFetch()
    }

    render(){
        return(
            <div className='earchable-movie-reviews' >
            <form onSubmit={this.handleSubmit} >
            <input type="text"  value={this.state.searchTerm} onChange={this.handleChange} />
            <button>Search</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}