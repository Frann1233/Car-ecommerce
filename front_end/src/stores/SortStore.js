import {
  action,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { SORTBY_LABEL_NAME } from './VehicleModelStore';

class SortStore {
  asc = false;

  sortBy = SORTBY_LABEL_NAME ?? 'Name';

  constructor() {
    makeObservable(this, {
      asc: observable,
      sortBy: observable,
      setAsc: action,
      setSortBy: action,
    });
  }

  setAsc(boolean) {
    this.asc = boolean;
  }

  setSortBy(label) {
    // eslint-disable-next-line no-return-assign
    runInAction(() => this.sortBy = label);
  }
}

export default SortStore;
