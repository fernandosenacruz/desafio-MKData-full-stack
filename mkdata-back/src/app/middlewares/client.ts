import { RequestHandler } from 'express';

import { ClientSchema } from '../schemas';

const validateCreate: RequestHandler = (req, _res, next) => {
  ClientSchema.create.parse(req.body);

  next();
};

const validateUpdate: RequestHandler = (req, _res, next) => {
  ClientSchema.updateOne.parse(req.body);

  next();
};

export default {
  validateCreate,
  validateUpdate,
};
