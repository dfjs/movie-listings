import React from 'react';
import PropTypes from 'prop-types';

import AppMessage from '../AppMessage';
import Genre from '../Genre';

import './index.css';

const GenreFilter = ({ genres, changed, error }) => {
  return (
    <div className="GenreFilter">
      <h3 className="GenreFilter__heading">Genres</h3>
      { error ? (
        <AppMessage type="error">Error loading genres :(</AppMessage>
      ) : (
        <ul>
          {Object.keys(genres).map(id => {
            return (
              <li key={`genre-${id}`}>
                <Genre genre={genres[id]} changed={changed} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
};

GenreFilter.propTypes = {
  genres: PropTypes.object,
  changed: PropTypes.func,
  error: PropTypes.bool.isRequired
};

export default GenreFilter;
