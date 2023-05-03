import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Consts from '../../common/Consts';
import styles from './Sort.module.css';

function SortButton({
  asc,
  sortByLabel,
  currentSortBy,
  onClick,
}) {
  return (
    <Button
      variant="stripped"
      onClick={() => onClick()}
    >
      <div className={styles.sortButtons}>
        {currentSortBy === sortByLabel && (
          <Text
            variant={Consts.TEXT_VARIANTS.regular}
            style={{
              color: currentSortBy === sortByLabel ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
            }}
          >
            {asc ? '↑' : '↓'}
          </Text>
        )}
      </div>
      <div className={styles.sortAbrv}>
        <Text
          variant={Consts.TEXT_VARIANTS.regular}
          style={{
            color: currentSortBy === sortByLabel ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
          }}
        >
          {sortByLabel}
        </Text>
      </div>
    </Button>
  );
}

SortButton.propTypes = {
  asc: PropTypes.bool.isRequired,
  sortByLabel: PropTypes.string.isRequired,
  currentSortBy: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SortButton;
