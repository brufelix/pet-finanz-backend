import { ISale } from '../../types/Sale';
import { SaleModel } from '../../models/Sale';

class SalesRepository {
  private saleModel: typeof SaleModel;

  constructor() {
    this.saleModel = SaleModel;
  }

  async create(data: ISale) {
    try {
      const result = await this.saleModel.create({ ...data });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      const result = await this.saleModel.find();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export { SalesRepository };
