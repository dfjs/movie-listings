import { createReducer } from 'redux-create-reducer';
import {
  RECEIVE_MOVIES,
  REQUEST_MOVIES,
  REQUEST_MOVIES_FAILURE
} from '../actions/movies';

export const initialState = {
  isLoading: false,
  loadError: false,
  movies: []
};

export const movies = createReducer(initialState, {
  [REQUEST_MOVIES](state) {
    return {
      ...state,
      isLoading: true,
      loadError: initialState.loadError
    }
  },
  [REQUEST_MOVIES_FAILURE](state, { error }) {
    // TODO Use/display error message
    return {
      ...state,
      isLoading: initialState.isLoading,
      loadError: true,
      movies: initialState.movies
    }
  },
  [RECEIVE_MOVIES](state, action) {
    return {
      ...state,
      isLoading: initialState.isLoading,
      movies: action.movies
    }
  },
});

export const getMoviesSelector = (state) => {
  return state.movies.movies;
};

export const isLoadingMovies = (state) => {
  return state.movies.isLoading;
};

export const loadMoviesError = (state) => {
  return state.movies.loadError;
};

export default movies;
