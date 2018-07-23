import { createReducer } from 'redux-create-reducer';
import {
  RECEIVE_MOVIE_GENRES,
  REQUEST_MOVIE_GENRES,
  REQUEST_MOVIE_GENRES_FAILURE,
  UPDATE_MOVIE_GENRE
} from '../actions/movieGenres';
import { getMoviesSelector } from './movies';

export const initialState = {
  isLoading: false,
  loadError: false,
  movieGenres: {}
};

export const movieGenres = createReducer(initialState, {
  [REQUEST_MOVIE_GENRES](state) {
    return {
      ...state,
      isLoading: true,
      loadError: initialState.loadError
    }
  },
  [REQUEST_MOVIE_GENRES_FAILURE](state, { error }) {
    // TODO Use/display error message
    return {
      ...state,
      isLoading: initialState.isLoading,
      loadError: true,
      movieGenres: initialState.movieGenres
    }
  },
  [RECEIVE_MOVIE_GENRES](state, { movies }) {
    return {
      ...state,
      isLoading: initialState.isLoading,
      movieGenres: movies
    }
  },
  [UPDATE_MOVIE_GENRE](state, { genre }) {
    return {
      ...state,
      movieGenres: {
        ...state.movieGenres,
        [genre.id]: { ...genre, checked: genre.checked }
      }
    };
  }
});

export const getMovieGenresSelector = (state) => {
  return state.movieGenres.movieGenres;
};

export const isLoadingMovieGenres = (state) => {
  return state.movieGenres.isLoading;
};

export const loadMovieGenresError = (state) => {
  return state.movieGenres.loadError;
};

export const getSelectedMovieGenreIds = (state) => {
  const movieGenres = getMovieGenresSelector(state);

  return Object.keys(movieGenres)
    .filter(genreKey => {
      return movieGenres[genreKey].checked;
    })
    .map(genreKey => {
      return parseInt(genreKey, 10);
    });
};

/**
 * getMovieGenresWithAssociatedMovies
 *
 * For the Movies we currently have, get the associated Genres
 */
export const getMovieGenresWithAssociatedMovies = (state) => {
  const movies = getMoviesSelector(state);

  // TODO Look to use `Object.entries`, but ES2017...

  // Find Genres that have at least one associated movie, then return them
  return Object.keys(getMovieGenresSelector(state)).filter(genre => {
    return movies.some(movie => movie.genre_ids.includes(parseInt(genre, 10)));
  })
    .map(key => parseInt(key, 10))
    .reduce((genres, key) => {
      genres[key] = getMovieGenresSelector(state)[key];
      return genres;
    }, {});
};

export default movieGenres;
