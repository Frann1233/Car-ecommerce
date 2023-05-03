import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import Pagination from './PaginationStore';

export const SORTBY_LABEL_NAME = 'Name';
export const SORTBY_LABEL_MODEL = 'Abrv';

export default class VehicleModelStore {
  name = null;

  abrv = null;

  makeId = null;

  makeCount = null;

  fetchedModels = [];

  filterByMakeName = null;

  image = {
    src: null,
    file: null,
  };

  sort = {
    by: null,
    asc: false,
  };

  httpService;

  pagination = new Pagination();

  loading = false;

  constructor(httpService) {
    this.httpService = httpService;
    makeObservable(this, {
      name: observable,
      abrv: observable,
      makeId: observable,
      makeCount: observable,
      fetchedModels: observable,
      filterByMakeName: observable,
      pagination: observable,
      image: observable,
      sort: observable,
      getPagination: action,
      setName: action,
      setAbrv: action,
      setSortBy: action,
      setSortAsc: action,
      setImageFile: action,
      getMany: action,
      get: action,
      getManyWithMake: action,
      update: action,
      create: action,
      delete: action,
    });
  }

  getPagination() {
    return this.pagination;
  }

  setName({ name }) {
    runInAction(() => {
      this.name = name;
    });
  }

  setAbrv({ abrv }) {
    runInAction(() => {
      this.abrv = abrv;
    });
  }

  setSortBy({ sortBy }) {
    runInAction(() => {
      this.sort.by = sortBy;
    });
    this.getMany();
  }

  setSortAsc({ asc }) {
    runInAction(() => {
      this.sort.asc = asc;
    });
    this.getMany();
  }

  setImageFile({ imageFile }) {
    this.image.file = imageFile;
  }

  async getMany() {
    if (this.loading === false) {
      runInAction(() => {
        this.loading = true;
      });
      const result = await this.httpService.model.getMany({
        pagination: {
          skip: this.pagination.skip,
          take: this.pagination.take,
        },
        sortASC: this.sort.asc,
        sortMake: this.sort.by === SORTBY_LABEL_MODEL,
        sortName: this.sort.by === SORTBY_LABEL_NAME,
      });
      runInAction(() => {
        this.fetchedModels = result.data.data;
        this.loading = false;
        this.filterByMakeName = undefined;
        this.pagination.setCount(result.data.count);
      });
    }
  }

  async get({ modelId }) {
    const result = await this.httpService.model.get({ modelId });
    runInAction(() => {
      this.name = result.data.name;
      this.abrv = result.data.abrv;
      this.makeId = result.data.makeId;
      this.image.src = result.data.image;
    });
  }

  async getManyWithMake({ makeId }) {
    const result = await this.httpService.model.getManyWithMake({ makeId });
    const makeFromMakeId = await this.httpService.make.get({ id: makeId });
    const makeNameFromObject = makeFromMakeId.data.name;
    runInAction(() => {
      this.fetchedModels = result.data.data;
      this.filterByMakeName = makeNameFromObject;
    });
  }

  async update({
    modelId,
    name,
    abrv,
    vehicleMakeId,
  }) {
    await this.httpService.model.update({
      modelId,
      name,
      abrv,
      vehicleMakeId: parseInt(vehicleMakeId, 10),
      imageFile: this.image.file,
    });
  }

  async create({ makeId }) {
    await this.httpService.model.create({
      name: this.name,
      abrv: this.abrv,
      makeId,
      imageFile: this.image.file,
    });
  }

  async delete({ modelId }) {
    const result = await this.httpService.model.delete({ modelId });
    if (result.status === 200) {
      runInAction(() => {
        this.fetchedModels = this.fetchedModels.filter(
          (model) => model.id !== result.data.id,
        );
      });
    }
  }
}
