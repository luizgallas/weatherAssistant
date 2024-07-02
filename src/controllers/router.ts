import { Router } from 'express';
import assistantController from './assistantController';

const router = Router();

router.use(assistantController);

export default router;