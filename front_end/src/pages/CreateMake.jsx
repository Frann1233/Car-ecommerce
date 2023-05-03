import React from 'react';
import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import HeaderCreateEdit from '../components/Header/HeaderCreateEdit';

function CreateMake() {
  return (
    <Container variant="background">
      <HeaderCreateEdit
        heading="Create your car make"
        ButtonLabelListing="Listing"
        ButtonLabelSubmit="Submit"
      />
      <Form
        makeOrModel="make"
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

export default CreateMake;
