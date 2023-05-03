import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  children,
  onClick,
  style = {},
  variant = 'button',
}) {
  return (
    <div
      className={`button button--${variant}`}
      style={style}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={-1}
      role="button"
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
};

Button.defaultProps = {
  onClick: () => { },
  variant: 'button',
  style: {},
};

export default Button;
