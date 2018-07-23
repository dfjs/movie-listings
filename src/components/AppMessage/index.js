import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const AppMessage = ({ type, children }) => {
  return (
    <span className={`AppMessage AppMessage--${ type || 'info' }`}>
      {children}
    </span>
  )
};

AppMessage.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default AppMessage;
