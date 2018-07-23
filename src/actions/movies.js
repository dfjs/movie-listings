import TmdbApiService from '../services/tmdb.api.service'

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const REQUEST_MOVIES_FAILURE = 'REQUEST_MOVIES_FAILURE';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function requestMovies() {
  return { type: REQUEST_MOVIES }
}

export function requestMoviesFailure(error) {
  return { type: REQUEST_MOVIES_FAILURE, error }
}

export function receiveMovies(movies) {
  return { type: RECEIVE_MOVIES, movies }
}

export const getMovies = () => (dispatch) => {
  dispatch(requestMovies());

  return TmdbApiService.getMoviesNowPlaying()
    .then(movies => {
      // Sort by `popularity` - note that TMDB seems to pre-sort anyway..
      movies.sort((a, b) => {
        return parseFloat(b.popularity) - parseFloat(a.popularity)
      });
      return movies;
    })
    .then(movies => dispatch(receiveMovies(movies)))
    .catch(error => dispatch(requestMoviesFailure(error)));
};
