import { combineReducers } from 'redux';

import { movieGenres } from './movieGenres';
import { movies } from './movies';
import { movieRating } from './movieRating';

export default combineReducers({
  movieGenres,
  movies,
  movieRating
});
