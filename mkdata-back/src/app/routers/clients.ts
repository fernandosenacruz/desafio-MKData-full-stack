import { Router } from 'express';

import { ClientCrontroller } from '../controllers';
import validations from '../middlewares/client';
import { prisma } from '../helpers/prisma';

const router: Router = Router();

const clientController = new ClientCrontroller({ prisma });

router.get('/', clientController.getAll);

router.get('/:id', clientController.getById);

router.post('/post', validations.validateCreate, clientController.create);

router.put('/:id', validations.validateUpdate, clientController.updateOne);

router.delete('/:id', clientController.deleteOne);

export default router;
