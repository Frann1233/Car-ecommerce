/* eslint-disable class-methods-use-this */
import axios from 'axios';
import consts from './Consts';

const instance = axios.create({
  baseURL: consts.DEFAULT_URL,
});

class HttpService {
  make;

  model;

  constructor() {
    this.make = {
      get: this.#getMakeById,
      getMany: this.#getMakes,
      create: this.#createMake,
    };
    this.model = {
      get: this.#getModelById,
      getMany: this.#getModels,
      getManyWithMake: this.#getModelsWithSpecificMakeId,
      delete: this.#deleteModel,
      update: this.#updateModel,
      create: this.#createModel,
    };
  }

  async #getMakes({ pagination: { skip, take } }) {
    const result = await instance.get('/vehicle-make', {
      params: {
        take,
        skip,
      },
    });
    return result;
  }

  async #getMakeById({ id }) {
    const result = await instance.get(`/vehicle-make/${id}`);
    return result;
  }

  async #createMake({ name, abrv }) {
    const result = await instance.post('/vehicle-make', {
      name,
      abrv,
    });
    return result.data;
  }

  async #getModels({
    sortASC,
    sortMake,
    sortName,
    pagination: { skip, take },
  }) {
    const result = await instance.get('/vehicle-model', {
      params: {
        take,
        skip,
        sortASC,
        sortMake,
        sortName,
      },
    });
    // this.pagination.setCount(result.data.count);
    return result;
  }

  async #getModelById({ modelId }) {
    const result = await instance.get(`/vehicle-model/${modelId}`);
    return result;
  }

  async #getModelsWithSpecificMakeId({ makeId }) {
    const result = await instance.get(
      `/vehicle-model?filterMakeId=${makeId}`,
    );
    return result;
  }

  async #updateModel({
    modelId,
    name,
    abrv,
    vehicleMakeId,
    imageFile,
  }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('abrv', abrv);
    formData.append('makeId', parseInt(vehicleMakeId, 10));
    formData.append('image', imageFile);
    const result = await instance.patch(`/vehicle-model/${modelId}`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return result;
  }

  async #createModel({
    makeId,
    name,
    abrv,
    imageFile,
  }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('abrv', abrv);
    formData.append('makeId', parseInt(makeId, 10));
    formData.append('image', imageFile);
    const result = await instance.post('/vehicle-model', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return result;
  }

  async #deleteModel({ modelId }) {
    const result = await instance.delete('/vehicle-model', {
      data: {
        id: parseInt(modelId, 10),
      },
    });
    return result;
  }
}

export default HttpService;
