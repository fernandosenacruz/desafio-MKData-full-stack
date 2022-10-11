import { Router } from 'express';

import { ClientCrontroller } from '../controllers';

const router: Router = Router();

const clientController = new ClientCrontroller();

router.get('/', clientController.getAll);

export default router;
