import { SalesRepository } from '../../repositories/sales';
import { ISale } from '../../types/Sale';

class SalesServices {
  private salesRepository: SalesRepository;

  constructor() {
    this.salesRepository = new SalesRepository();
  }

  async create(data: ISale) {
    try {
      const result = await this.salesRepository.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      const result = await this.salesRepository.get();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export { SalesServices };
