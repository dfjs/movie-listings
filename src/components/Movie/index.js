import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Movie = ({ movie: { title, genre_ids, poster_path }, allGenres }) => {

  // Get formatted Genre names for the movie's associated genre IDs
  const genres = genre_ids.map(id => allGenres[id] ? allGenres[id].name : '').join(', ');

  return (
    <div className="Movie">
      <img className="Movie__poster"
           src={`https://image.tmdb.org/t/p/w92${poster_path}`}
           alt={`${title} poster`}
      />
      <div className="Movie__information">
        <h4 className="Movie__title">
          {title}
        </h4>
        <div className="Movie__genre">
          {genres}
        </div>
      </div>
    </div>
  )
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre_ids: PropTypes.array,
    poster_path: PropTypes.string
  }),
  allGenres: PropTypes.object.isRequired
};

export default Movie;
