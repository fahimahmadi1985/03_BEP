import {Router} from 'express';
import { getProducts } from '../controllers/products';
import { authenticate } from '../middlewares/jwt';

const router = Router();

// define routes
router.get('/list', authenticate, getProducts);

export default router;