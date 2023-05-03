import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import SortButton from './SortButton';
import { SORTBY_LABEL_MODEL, SORTBY_LABEL_NAME } from '../../stores/VehicleModelStore';
import { useComponentStore, useStore } from '../../stores/Store';
import styles from './Sort.module.css';

const Sort = observer(() => {
  const { sortStore } = useComponentStore();
  const { vehicleModelStore } = useStore();

  const handleSortByToggle = (sortByLabel) => {
    vehicleModelStore.setSortBy({ sortBy: sortByLabel });
    sortStore.setSortBy(sortByLabel);
  };

  const handleAscToggle = () => {
    sortStore.setAsc(!sortStore.asc);
  };

  const handleClick = (sortByLabel) => {
    handleSortByToggle(sortByLabel);
    handleAscToggle();
  };

  useEffect(() => {
    vehicleModelStore.setSortAsc({ asc: sortStore.asc });
  }, [sortStore.asc]);

  useEffect(() => {
    vehicleModelStore.setSortBy({ sortBy: sortStore.sortBy });
  }, [sortStore.sortBy]);

  return (
    <div className={styles.sortContainer}>
      <SortButton
        asc={sortStore.asc}
        currentSortBy={sortStore.sortBy}
        sortByLabel={SORTBY_LABEL_NAME}
        onClick={() => handleClick(SORTBY_LABEL_NAME)}
      />
      <SortButton
        asc={sortStore.asc}
        sortByLabel={SORTBY_LABEL_MODEL}
        currentSortBy={sortStore.sortBy}
        onClick={() => handleClick(SORTBY_LABEL_MODEL)}
      />
    </div>
  );
});

export default Sort;
