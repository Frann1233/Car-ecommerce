import React, { useEffect } from 'react';
import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import HeaderCreateEdit from '../components/Header/HeaderCreateEdit';
import { useStore } from '../stores/Store';

function CreateModel() {
  const { vehicleMakeStore } = useStore();

  useEffect(() => {
    vehicleMakeStore.getMany();
  }, []);

  return (
    <Container variant="background">
      <HeaderCreateEdit
        heading="Create your car listing"
        ButtonLabelListing="Listing"
        ButtonLabelSubmit="Submit"
      />
      <Form
        makeOrModel="model"
        subheadingMake="Vehicle Make"
        subheadingModel="Vehicle Model"
        regularId="Id"
        itemName="Name"
        itemAbrv="Abrv"
        itemMakeId="Make Id"
      />
    </Container>
  );
}

export default CreateModel;
