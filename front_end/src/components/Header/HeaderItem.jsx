import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Consts from '../../common/Consts';
import Button from '../Button/Button';
import Navigation from '../../common/Navigation';
import Container from '../Container/Container';

function HeaderItem({ heading, onButtonClick }) {
  Navigation();
  return (
    <Container variant="item">
      <Text variant={Consts.TEXT_VARIANTS.heading}>{heading}</Text>
      <Button onClick={onButtonClick}>
        <Navigation />
      </Button>
    </Container>
  );
}

HeaderItem.propTypes = {
  heading: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

HeaderItem.defaultProps = {
  onButtonClick: () => { },
};

export default HeaderItem;
