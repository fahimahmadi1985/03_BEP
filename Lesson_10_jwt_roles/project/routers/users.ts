import {Router} from 'express';
import { login } from '../controllers/users';
const router = Router();  // mini application

//routes
router.post("/login", login);

export default router;