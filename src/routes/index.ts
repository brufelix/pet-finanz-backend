import { Router } from 'express';
import { PetsRoutes } from './pets';
import { SalesRoutes } from './sales';

const router = Router();

const petsRoutes = new PetsRoutes().getAllRoutes();
const salesRoutes = new SalesRoutes().getAllRoutes();

router.use('/pets', petsRoutes);
router.use('/sales', salesRoutes);

export { router };
