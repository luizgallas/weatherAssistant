import { Router } from 'express';
import assistantController from './weatherController';

const router = Router();

router.use(assistantController);

export default router;