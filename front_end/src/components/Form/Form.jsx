import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import Text from '../Text/Text';
import Consts from '../../common/Consts';
import Container from '../Container/Container';
import { useStore } from '../../stores/Store';
import styles from './Form.module.css';
import MakeSelect from '../MakeSelect/MakeSelect';

const Form = observer(
  ({
    subheadingMake,
    subheadingModel,
    itemName,
    itemAbrv,
    makeOrModel,
    editing,
  }) => {
    const { vehicleModelStore, vehicleMakeStore } = useStore();
    const { id } = useParams();

    useEffect(() => {
      if (makeOrModel === 'make') {
        vehicleMakeStore.setId({ id: '-1' });
      } else {
        vehicleMakeStore.getMany();
        // eslint-disable-next-line max-len, no-unused-expressions
        // vehicleMakeStore.setId({ id: vehicleMakeStore.fetchedMakes[0].id });
      }

      if (editing) {
        vehicleModelStore.get({ modelId: id });
      }
    }, []);

    const handleSelect = (target) => {
      vehicleMakeStore.setId({ id: target.value });
    };

    return (
      <form encType="multipart/form-data" method="POST">
        <Container variant="form">
          {makeOrModel === 'make' && (
            <div className={styles.vehicleInputs}>
              <Text variant={Consts.TEXT_VARIANTS.subheading}>
                {subheadingMake}
              </Text>
              <Text variant={Consts.TEXT_VARIANTS.regular}>Name</Text>
              <input placeholder="name" type="text" onChange={(event) => vehicleMakeStore.setName({ name: event.target.value })} />
              <Text variant={Consts.TEXT_VARIANTS.regular}>Abrv</Text>
              <input placeholder="abrv" type="text" onChange={(event) => vehicleMakeStore.setAbrv({ abrv: event.target.value })} />
            </div>
          )}
          {makeOrModel === 'model' && (
            <>
              <div className={styles.vehicleInputs}>
                <Text variant={Consts.TEXT_VARIANTS.subheading}>
                  {subheadingMake}
                </Text>
                <MakeSelect onChange={handleSelect} />
              </div>
              <div className={styles.vehicleInputs}>
                <Text variant={Consts.TEXT_VARIANTS.subheading}>
                  {subheadingModel}
                </Text>
                <Text variant={Consts.TEXT_VARIANTS.regular}>{itemName}</Text>
                <input
                  placeholder="name"
                  type="text"
                  value={editing && vehicleModelStore.name}
                  onChange={(event) => (vehicleModelStore.setName({ name: event.target.value }))}
                />
                <Text variant={Consts.TEXT_VARIANTS.regular}>{itemAbrv}</Text>
                <input
                  placeholder="abrv"
                  type="text"
                  value={editing && vehicleModelStore.abrv}
                  onChange={(event) => (vehicleModelStore.setAbrv({ abrv: event.target.value }))}
                />
              </div>
            </>
          )}
        </Container>
        {makeOrModel === 'model' && (
          <Container variant="photoInput">
            <input type="file" onChange={(event) => vehicleModelStore.setImageFile({ imageFile: event.target.files[0] })} />
          </Container>
        )}
      </form>
    );
  },
);

export default Form;
