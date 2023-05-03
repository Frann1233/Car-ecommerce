import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Text from '../Text/Text';
import Consts from '../../common/Consts';
import { useStore } from '../../stores/Store';
import styles from './ItemDescription.module.css';

const ItemDescription = observer(({
  subheadingMake,
  subheadingModel,
  itemMakeId = undefined,
  Name = 'Name',
  Abrv = 'Abrv',
  MakeId = 'MakeId',
}) => {
  const { vehicleMakeStore, vehicleModelStore } = useStore();

  useEffect(() => {
    if (itemMakeId !== undefined) {
      vehicleMakeStore.get({ id: itemMakeId });
    }
  }, [itemMakeId]);

  return (
    <Container variant="itemContainer">
      <div className={styles.itemImage}>
        <img src={`${vehicleModelStore.image.src}`} alt="" />
      </div>
      <div className={styles.vehicleDescription}>
        <Text variant={Consts.TEXT_VARIANTS.subheading}>{subheadingMake}</Text>
        <div className={styles.vehicleItemDescription}>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{Name}</Text>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{vehicleMakeStore.name}</Text>
        </div>
        <div className={styles.vehicleItemDescription}>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{Abrv}</Text>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{vehicleMakeStore.abrv}</Text>
        </div>
      </div>
      <div className={styles.vehicleDescription}>
        <Text variant={Consts.TEXT_VARIANTS.subheading}>{subheadingModel}</Text>
        <div className={styles.vehicleItemDescription}>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{MakeId}</Text>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{itemMakeId}</Text>
        </div>
        <div className={styles.vehicleItemDescription}>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{Name}</Text>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{vehicleModelStore.name}</Text>
        </div>
        <div className={styles.vehicleItemDescription}>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{Abrv}</Text>
          <Text variant={Consts.TEXT_VARIANTS.regular}>{vehicleModelStore.abrv}</Text>
        </div>
      </div>
    </Container>
  );
});

ItemDescription.propTypes = {
  subheadingMake: PropTypes.string.isRequired,
  subheadingModel: PropTypes.string.isRequired,
};

export default ItemDescription;
