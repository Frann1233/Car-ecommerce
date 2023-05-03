import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Container from '../Container/Container';
import GridItem from '../GridItem/GridItem';

const GridItems = observer(({ data }) => (
  <Container variant="grid">
    {data.map((item) => (
      <GridItem
        key={item.id}
        abrv={item.abrv}
        image={item.image ?? ''}
        name={item.name}
        id={item.id}
      />
    ))}
  </Container>
));

GridItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      abrv: PropTypes.string,
    }),
  ).isRequired,
};

export default GridItems;
