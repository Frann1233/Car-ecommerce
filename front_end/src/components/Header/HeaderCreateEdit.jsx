import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import Text from '../Text/Text';
import Consts from '../../common/Consts';
import Button from '../Button/Button';
import Navigation from '../../common/Navigation';
import Container from '../Container/Container';
import { useStore } from '../../stores/Store';
import styles from './HeaderCreateEdit.module.css';

function HeaderCreateEdit({ heading, ButtonLabelSubmit, editing = false }) {
  const { vehicleModelStore, vehicleMakeStore } = useStore();
  const { id } = useParams();
  const navigate = useNavigate();
  Navigation();

  const handleSubmit = () => {
    if (!editing) {
      if (vehicleMakeStore.id === '-1') {
        vehicleMakeStore.create();
      } else {
        vehicleModelStore.create({ makeId: vehicleMakeStore.id });
      }
    } else {
      vehicleModelStore.update({
        modelId: id,
        name: vehicleModelStore.name,
        abrv: vehicleModelStore.abrv,
        vehicleMakeId: vehicleMakeStore.id,
      });
    }
    navigate('/');
  };

  return (
    <Container variant="headerCreateEdit">
      <Text variant={Consts.TEXT_VARIANTS.heading}>{heading}</Text>
      <div className={styles.buttonsCreateEdit}>
        <Button>
          <Navigation />
        </Button>
        <Button
          onClick={() => handleSubmit()}
        >
          {ButtonLabelSubmit}
        </Button>
      </div>
    </Container>
  );
}

HeaderCreateEdit.propTypes = {
  heading: PropTypes.string.isRequired,
  ButtonLabelSubmit: PropTypes.string.isRequired,
  editing: PropTypes.bool,
};

HeaderCreateEdit.defaultProps = {
  editing: false,
};

export default HeaderCreateEdit;
