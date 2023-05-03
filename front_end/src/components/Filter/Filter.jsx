import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/Store';
import styles from './Filter.module.css';
import MakeSelect from '../MakeSelect/MakeSelect';

const Filter = observer(() => {
  const { vehicleModelStore } = useStore();

  const handleChange = (target) => {
    if (target === null) {
      vehicleModelStore.getMany();
    } else if (target.value) {
      vehicleModelStore.getManyWithMake({ makeId: target.value });
    }
  };

  return (
    <div className={styles.searchMake}>
      <MakeSelect onChange={handleChange} />
    </div>
  );
});

export default Filter;
