import StatusCodes from '../others/StatusCodes';

export class ApplicationError extends Error {
  constructor(
    public statusCode: StatusCodes,
    public message: string,
  ) {
    super();
  }
}

const ERRORS = {
  CLIENT: {
    CLIENT_EXISTS: new ApplicationError(
      StatusCodes.CONFLICT,
      'Cliente já cadastrado',
    ),
    NOT_FOUND: new ApplicationError(
      StatusCodes.NOT_FOUND,
      'Cliente não encontrado',
    ),
  },
};

export default ERRORS;
