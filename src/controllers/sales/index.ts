import { Request, Response } from 'express';
import { SalesServices } from '../../services/sales';

class SalesController {
  private salesServices: SalesServices;

  constructor() {
    this.salesServices = new SalesServices();
  }

  async create(request: Request, response: Response) {
    try {
      const { body } = request;
      const result = await this.salesServices.create(body);

      return response.status(201).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).end();
    }
  }

  async get(request: Request, response: Response) {
    try {
      const result = await this.salesServices.get();
      
      return response.status(201).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).end();
    }
  }
}

export { SalesController };
