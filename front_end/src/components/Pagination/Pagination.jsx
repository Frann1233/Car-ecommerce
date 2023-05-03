import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/Store';
import Button from '../Button/Button';
import styles from './Pagination.module.css';

const Pagination = observer(() => {
  const { vehicleMakeStore, vehicleModelStore } = useStore();

  useEffect(() => {
    vehicleMakeStore.getMany();
  }, []);

  return (
    <div className={styles.listPagination}>
      <Button
        variant="detail"
        onClick={() => {
          vehicleModelStore.getPagination().previousPage();
          vehicleModelStore.getMany();
        }}
      >
        ❮
      </Button>
      <h3>{`${vehicleModelStore.getPagination().skip} - ${vehicleModelStore.getPagination().currentLastIndex} of ${vehicleModelStore.getPagination().count}`}</h3>
      <Button
        variant="detail"
        onClick={() => {
          vehicleModelStore.getPagination().nextPage();
          vehicleModelStore.getMany();
        }}
      >
        ❯
      </Button>
    </div>
  );
});

export default Pagination;
