import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Header from '../components/Header/Header';
import FirstSection from '../components/FirstSection/FirstSection';
import Container from '../components/Container/Container';
import GridItems from '../components/GridItems/GridItems';
import HeaderAccessories from '../components/HeaderAccessories/HeaderAccessories';
import Sort from '../components/Sort/Sort';
import { useStore } from '../stores/Store';
import Filter from '../components/Filter/Filter';
import Pagination from '../components/Pagination/Pagination';

const List = observer(() => {
  const { vehicleModelStore } = useStore();

  useEffect(() => {
    vehicleModelStore.getMany();
  }, []);

  return (
    <Container variant="background">
      <Header heading="Find your perfect car" />
      <HeaderAccessories />
      <FirstSection
        buttonLabel="Create"
      />
      <Container variant="filter">
        <Container variant="filterSort">
          <Filter />
          <Sort />
        </Container>
        <Pagination />
      </Container>
      <GridItems data={vehicleModelStore.fetchedModels} />
    </Container>
  );
});

export default List;
