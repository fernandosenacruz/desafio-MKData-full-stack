import { Router } from 'express';

import { ClientCrontroller } from '../controllers';
import validations from '../middlewares/client';

const router: Router = Router();

const clientController = new ClientCrontroller();

router.get('/', clientController.getAll);

router.get('/:id', clientController.getById);

router.post('/', validations.validateCreate, clientController.create);

router.put('/:id', validations.validateUpdate, clientController.updateOne);

router.delete('/:id', clientController.deleteOne);

router

export default router;
