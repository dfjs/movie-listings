import React from 'react';
import PropTypes from 'prop-types';

import AppMessage from '../AppMessage';
import Movie from '../Movie';

import './index.css';

const MovieList = ({ movies, genres, error }) => {

  if (error) return <AppMessage type="error">Error loading movies :(</AppMessage>;

  return (
    <div className="MovieList">
      <ul>
        {movies.map(movie => {
          return (
            <li key={`movie-${movie.id}`}>
              <Movie movie={movie} allGenres={genres} />
            </li>
          )
        })}
      </ul>
    </div>
  )
};

MovieList.propTypes = {
  movies: PropTypes.array,
  genres: PropTypes.object,
  error: PropTypes.bool.isRequired
};

export default MovieList;
