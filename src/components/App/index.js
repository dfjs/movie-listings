import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovies } from '../../actions/movies';
import { getMovieGenres, updateMovieGenre } from '../../actions/movieGenres';
import { setRating } from '../../actions/movieRating';

import { getMoviesSelector, isLoadingMovies, loadMoviesError } from '../../reducers/movies';
import {
  getMovieGenresWithAssociatedMovies,
  getSelectedMovieGenreIds,
  isLoadingMovieGenres, loadMovieGenresError
} from '../../reducers/movieGenres';
import { getRating } from '../../reducers/movieRating';

import GenreFilter from '../GenreFilter';
import MovieList from '../MovieList';
import RatingFilter from '../RatingFilter';

import './index.css';

export class App extends Component {

  componentWillMount() {
    this.props.getMovies();
    this.props.getMovieGenres();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__header">Movie Listings!</h1>
        {this.props.isLoading ? <p>Loading...</p> : (
          <div className="App__container">
            <div className="App__filters">
              <RatingFilter changeRating={this.props.setRating} rating={this.props.rating} />
              <GenreFilter
                genres={this.props.movieGenres}
                changed={this.props.updateMovieGenre}
                error={this.props.loadGenresError}
              />
            </div>
            <div className="App__movies">
              <MovieList
                movies={this.props.movies}
                genres={this.props.movieGenres}
                error={this.props.loadMoviesError}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const getFilteredMovies = (movies, rating, selectedGenres) => {
  return movies
    .filter(movie => movie.vote_average >= rating)
    .filter(movie => {
      return selectedGenres.every(id => movie.genre_ids.includes(id));
    });
};

const mapStateToProps = state => ({
  movies: getFilteredMovies(getMoviesSelector(state), getRating(state), getSelectedMovieGenreIds(state)),
  movieGenres: getMovieGenresWithAssociatedMovies(state),
  rating: getRating(state),
  isLoading: isLoadingMovies(state) && isLoadingMovieGenres(state),
  loadMoviesError: loadMoviesError(state),
  loadGenresError: loadMovieGenresError(state)
});

export default connect(
  mapStateToProps,
  { getMovies, getMovieGenres, setRating, updateMovieGenre }
)(App);
