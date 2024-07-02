import { Router } from 'express';
import assistantController from './weather';

const router = Router();

router.use(assistantController);

export default router;