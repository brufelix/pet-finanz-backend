import { Router } from 'express';
import { PetsController } from '../../controllers/pets';

class PetsRoutes {
  private router: Router;
  private petsController: PetsController;

  constructor() {
    this.router = Router();
    this.petsController = new PetsController();
  }

  getAllRoutes() {
    this.router.get('/', this.petsController.get.bind(this.petsController));

    return this.router;
  }
}

export { PetsRoutes };
