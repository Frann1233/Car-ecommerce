import React from 'react';
import { observer } from 'mobx-react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { useStore } from '../../stores/Store';

const MakeSelect = observer(({ onChange }) => {
  const { vehicleMakeStore } = useStore();

  async function loadOptions(_, loadedOptions) {
    await vehicleMakeStore.getMany();
    vehicleMakeStore.getPagination().nextPage();

    const options = vehicleMakeStore.fetchedMakes.map((make) => ({
      value: make.id,
      label: make.name,
    }));

    return {
      options,
      hasMore: vehicleMakeStore.count > loadedOptions.length,
      additional: undefined,
    };
  }

  return (
    <AsyncPaginate
      onChange={(target) => onChange(target)}
      // eslint-disable-next-line react/jsx-no-bind
      loadOptions={loadOptions}
      options={vehicleMakeStore.fetchedMakes.map((make) => ({
        value: make.id,
        label: make.name,
      }))}
    />
  );
});

export default MakeSelect;
