import { Router } from 'express';
import { SalesController } from '../../controllers/sales';

class SalesRoutes {
  private router: Router;
  private salesController: SalesController;

  constructor() {
    this.router = Router();
    this.salesController = new SalesController();
  }

  getAllRoutes() {
    const create = this.salesController.create.bind(this.salesController);
    this.router.post('/', create);

    const get = this.salesController.get.bind(this.salesController);
    this.router.get('/', get);

    return this.router;
  }
}

export { SalesRoutes };
