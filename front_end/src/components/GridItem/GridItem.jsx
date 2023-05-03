import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Consts from '../../common/Consts';
import Text from '../Text/Text';
import { useStore } from '../../stores/Store';
import styles from './GridItem.module.css';

function GridItem({
  name,
  abrv,
  image,
  id,
}) {
  const { vehicleModelStore } = useStore();
  return (
    <Container variant="gridItem">
      <Link to={`/item/${id}`}>
        <img src={image} alt="" />
      </Link>
      <Button
        variant="detailLeft"
      >
        <Link to={`/edit/${id}`}>{Consts.DEFAULT_EDIT_ICON}</Link>
      </Button>
      <Button
        variant="detailRight"
        onClick={() => vehicleModelStore.delete({ modelId: id })}
      >
        {Consts.DEFAULT_DELETE_ICON}
      </Button>
      <div className={styles.itemDescription}>
        <Text variant={Consts.TEXT_VARIANTS.regular}>{name}</Text>
        <Text variant={Consts.TEXT_VARIANTS.regular}>{abrv}</Text>
      </div>
    </Container>
  );
}

GridItem.propTypes = {
  name: PropTypes.string.isRequired,
  abrv: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GridItem;
