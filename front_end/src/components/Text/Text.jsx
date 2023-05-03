import React from 'react';
import PropTypes from 'prop-types';
import Consts from '../../common/Consts';
import './Text.css';

function Text({ variant = Consts.TEXT_VARIANTS.regular, style = {}, children }) {
  const getClassName = () => {
    let result = '';
    switch (variant) {
      case Consts.TEXT_VARIANTS.detail:
        result = 'font-variant-detail';
        break;
      case Consts.TEXT_VARIANTS.heading:
        result = 'font-variant-heading';
        break;
      case Consts.TEXT_VARIANTS.subheading:
        result = 'font-variant-subHeading';
        break;
      default:
        result = 'font-variant-regular';
        break;
    }
    return result;
  };

  return <div className={getClassName()} style={style}>{children}</div>;
}

Text.propTypes = {
  variant: PropTypes.oneOf([
    Consts.TEXT_VARIANTS.detail,
    Consts.TEXT_VARIANTS.heading,
    Consts.TEXT_VARIANTS.regular,
    Consts.TEXT_VARIANTS.subheading,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
};

Text.defaultProps = {
  style: {},
  children: undefined,
};

export default Text;
