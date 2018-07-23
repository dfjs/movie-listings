import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Genre = ({ genre, changed }) => {

  const onChange = ({ target: { checked }}) => {
    changed({ ...genre, checked: checked });
  };

  return (
    <div className="Genre">
      <input
        className="Genre__input"
        type="checkbox"
        id={`genre-checkbox-${genre.id}`}
        name={`genre-checkbox-${genre.id}`}
        value={genre.id}
        defaultChecked={genre.checked}
        onChange={onChange}
      />
      <label htmlFor={`genre-checkbox-${genre.id}`}>{genre.name}</label>
    </div>
  )
};

Genre.propTypes = {
  genre: PropTypes.object,
  changed: PropTypes.func.isRequired
};

export default Genre;
