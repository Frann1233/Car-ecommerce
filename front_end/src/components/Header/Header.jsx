import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Consts from '../../common/Consts';

function Header({ heading }) {
  return (
    <Text variant={Consts.TEXT_VARIANTS.heading}>{heading}</Text>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
