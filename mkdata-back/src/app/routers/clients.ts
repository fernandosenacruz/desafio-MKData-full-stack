import { Router } from 'express';

import { ClientCrontroller } from '../controllers';
import validateCreate from '../middlewares/client';

const router: Router = Router();

const clientController = new ClientCrontroller();

router.post('/', validateCreate, clientController.create);

router.get('/', clientController.getAll);

export default router;
