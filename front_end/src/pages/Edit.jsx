import React from 'react';
import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import HeaderCreateEdit from '../components/Header/HeaderCreateEdit';

function Edit() {
  return (
    <Container variant="background">
      <HeaderCreateEdit
        editing
        heading="Edit your car listing"
        ButtonLabelListing="Listing"
        ButtonLabelSubmit="Submit"
      />
      <Form
        editing
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

export default Edit;
