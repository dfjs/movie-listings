import axios from 'axios';

/**
 * TMDB Api
 */
class TmdbApiService {

  static host = 'https://api.themoviedb.org/3';
  static apiKey = process.env.REACT_APP_TMBD_API_KEY;

  /**
   * Get Movies Now Playing
   *
   * https://developers.themoviedb.org/3/movies/get-now-playing
   */
  static getMoviesNowPlaying() {
    return axios.get(`${this.host}/movie/now_playing?api_key=${this.apiKey}`)
      .then(response => response.data.results);
  }

  /**
   * Get Movie Genre List
   *
   * https://developers.themoviedb.org/3/genres/get-movie-list
   */
  static getMovieGenreList() {
    return axios.get(`${this.host}/genre/movie/list?api_key=${this.apiKey}`)
      .then(response => response.data.genres);
  }
}

export default TmdbApiService;
