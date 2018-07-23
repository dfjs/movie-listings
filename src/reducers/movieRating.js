import { createReducer } from 'redux-create-reducer';
import { MOVIE_RATING_SET_RATING } from '../actions/movieRating';

export const initialState = {
  rating: 3.0 // default
};

export const movieRating = createReducer(initialState, {
  [MOVIE_RATING_SET_RATING](state, { rating }) {
    return {
      ...state,
      rating
    }
  }
});

export const getRating = (state) => {
  return state.movieRating.rating;
};

export default movieRating;
