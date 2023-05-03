import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import Pagination from './PaginationStore';

export default class VehicleMakeStore {
  id = null;

  name = null;

  abrv = null;

  fetchedMakes = [];

  count = null;

  httpService;

  pagination = new Pagination(1);

  constructor(httpService) {
    this.httpService = httpService;
    makeObservable(this, {
      id: observable,
      name: observable,
      abrv: observable,
      fetchedMakes: observable,
      count: observable,
      setId: action,
      setName: action,
      setAbrv: action,
      get: action,
      getMany: action,
      create: action,
    });
  }

  getPagination() {
    return this.pagination;
  }

  setId({ id }) {
    this.id = id;
  }

  setName({ name }) {
    this.name = name;
  }

  setAbrv({ abrv }) {
    this.abrv = abrv;
  }

  async get({ id }) {
    const result = await this.httpService.make.get({ id });
    const {
      id: makeId,
      name,
      abrv,
    } = result.data;
    runInAction(() => {
      this.id = makeId;
      this.name = name;
      this.abrv = abrv;
    });
  }

  async getMany() {
    const result = await this.httpService.make.getMany({
      pagination: {
        skip: this.pagination.skip,
        take: this.pagination.take,
      },
    });
    runInAction(() => {
      this.pagination.setCount(result.data.count);
      this.count = result.data.count;
      this.fetchedMakes = Array.from(result.data.data);
    });
  }

  async create() {
    const result = await this.httpService.make.create({
      name: this.name,
      abrv: this.abrv,
    });
    return result.data;
  }
}
