import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

import Helpers from '../helpers';
import StatusCodes from '../helpers/others/StatusCodes';
import { ITypedResponse } from '../interfaces';

interface IErrorResponse {
  statusCode: StatusCodes;
  message: string;
}

const { ApplicationError } = Helpers.errors;

const errorMiddleware: ErrorRequestHandler = (
  err,
  _req,
  res,
  _next
): ITypedResponse<IErrorResponse> => {
  console.log(err);
  if (err instanceof ZodError) {
    const zodError = err.issues[0];

    return res.status(StatusCodes.BAD_REQUEST).json({
      statusCode: StatusCodes.BAD_REQUEST,
      message: `${zodError.path[zodError.path.length - 1]}
       - ${zodError.message}`,
    });
  }

  if (err.statusCode || err.message) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Something worng does not rigth!',
  });
};

export default errorMiddleware;
