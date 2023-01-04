import { Router } from 'express';
import titeckRouter from './ticket';

const router = Router();

router.use('/ticket', titeckRouter);

export default router;
