import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

function Container({ children, variant = 'container', style }) {
  return (
    <div className={`container container--${variant}`} style={style}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  children: null,
  style: {},
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  variant: PropTypes.string.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
};

export default Container;
