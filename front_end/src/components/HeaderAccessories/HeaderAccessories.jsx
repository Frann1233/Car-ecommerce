import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './HeaderAccessories.module.css';

function HeaderAccessories({ onButtonClick }) {
  return (
    <div className={styles.listingHeader}>
      <div className={styles.createPaging}>
        <Button onClick={(onButtonClick)}>
          <Link to="/create-model">Create Model</Link>
        </Button>
        <Button onClick={onButtonClick}>
          <Link to="/create-make">Create Make</Link>
        </Button>
      </div>
    </div>

  );
}

HeaderAccessories.propTypes = {
  onButtonClick: PropTypes.func,
};

HeaderAccessories.defaultProps = {
  onButtonClick: () => { },
};

export default HeaderAccessories;
