import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const RatingFilter = ({ rating, changeRating }) => {

  const onChange = ({ target: { value }}) => {
    const newRating = parseFloat(value);

    if (!isNaN(newRating)) {
      changeRating(newRating);
    }
  };

  return (
    <div className="RatingFilter">
      <h3 className="RatingFilter__heading">Rating</h3>
      <input
        className="RatingFilter__input"
        type="number"
        step="0.5"
        value={rating}
        min="0"
        max="10"
        onChange={onChange}
      />
    </div>
  )
};

RatingFilter.propTypes = {
  rating: PropTypes.number,
  changeRating: PropTypes.func
};

export default RatingFilter;
