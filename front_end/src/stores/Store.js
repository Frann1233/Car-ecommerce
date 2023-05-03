import { createContext, useContext } from 'react';
import VehicleModelStore from './VehicleModelStore';
import VehicleMakeStore from './VehicleMakeStore';
import ImageSliderStore from './ImageSliderStore';
import SortStore from './SortStore';
import HttpService from '../common/HttpService';

const httpService = new HttpService();

const store = {
  vehicleModelStore: new VehicleModelStore(httpService),
  vehicleMakeStore: new VehicleMakeStore(httpService),
};

const componentStore = {
  imageSliderStore: new ImageSliderStore(),
  sortStore: new SortStore(),
};

const StoreContext = createContext(store);
const ComponentContext = createContext(componentStore);

export const useStore = () => useContext(StoreContext);
export const useComponentStore = () => useContext(ComponentContext);
export default {
  store,
  componentStore,
};
