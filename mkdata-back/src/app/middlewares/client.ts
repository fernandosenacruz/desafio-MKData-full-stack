import { RequestHandler } from 'express';

import { ClientSchema } from '../schemas';

const validateCreate: RequestHandler = (req, _res, next) => {
  ClientSchema.create.parse(req.body);

  next();
};

export default validateCreate;
