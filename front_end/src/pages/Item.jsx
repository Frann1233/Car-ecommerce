import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import Container from '../components/Container/Container';
import HeaderItem from '../components/Header/HeaderItem';
import ItemDescription from '../components/ItemDescription/ItemDescription';
import { useStore } from '../stores/Store';

const Item = observer(() => {
  const { id } = useParams();
  const { vehicleModelStore } = useStore();
  useEffect(() => {
    if (id !== null) {
      vehicleModelStore.get({ modelId: id });
    }
  }, [id]);

  return (
    <Container variant="background">
      <HeaderItem heading="Car Name" />
      {vehicleModelStore.makeId && (
        <ItemDescription
          itemMakeId={vehicleModelStore.makeId}
          subheadingMake="Vehicle Make"
          subheadingModel="Vehicle Model"
        />
      )}
    </Container>
  );
});

export default Item;
