import NodeCache from 'node-cache';
import { Request, Response } from 'express';
import { TheCatApiServices } from '../../services/theCatApiServices';

class PetsController {
  private cache: NodeCache;
  private theCatApiServices: TheCatApiServices;

  constructor() {
    this.cache = new NodeCache();
    this.theCatApiServices = new TheCatApiServices();
  }

  async get(request: Request, response: Response) {
    try {
      const cachedPets = this.cache.get('cachedPets');
      if (cachedPets) return response.status(200).json(cachedPets);

      const pets = await this.theCatApiServices.getPets();
      this.cache.set('cachedPets', pets, 3600);

      return response.status(200).json(pets);
    } catch (error) {
      console.error(error);
      return response.status(500).end();
    }
  }
}

export { PetsController };
