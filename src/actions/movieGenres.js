import TmdbApiService from '../services/tmdb.api.service'

export const REQUEST_MOVIE_GENRES = 'REQUEST_MOVIE_GENRES';
export const REQUEST_MOVIE_GENRES_FAILURE = 'REQUEST_MOVIE_GENRES_FAILURE';
export const RECEIVE_MOVIE_GENRES = 'RECEIVE_MOVIE_GENRES';
export const UPDATE_MOVIE_GENRE = 'UPDATE_MOVIE_GENRE';

export function requestMovieGenres() {
  return { type: REQUEST_MOVIE_GENRES }
}

export function requestMovieGenresFailure(error) {
  return { type: REQUEST_MOVIE_GENRES_FAILURE, error }
}

export function receiveMovieGenres(movies) {
  return { type: RECEIVE_MOVIE_GENRES, movies }
}

export function updateMovieGenre(genre) {
  return { type: UPDATE_MOVIE_GENRE, genre }
}

export const getMovieGenres = () => (dispatch) => {
  dispatch(requestMovieGenres());

  return TmdbApiService.getMovieGenreList()
    .then(genres => {
      return genres.reduce((obj, genre) => {
        obj[genre.id] = genre;
        return obj;
      }, {});
    })
    .then(genres => dispatch(receiveMovieGenres(genres)))
    .catch(error => dispatch(requestMovieGenresFailure(error)));
};
