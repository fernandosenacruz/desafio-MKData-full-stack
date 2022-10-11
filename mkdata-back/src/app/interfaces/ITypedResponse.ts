import { Send } from 'express-serve-static-core';

interface ITypedResponse<ResBody> extends Express.Response {
  json: Send<ResBody>;
}

export default ITypedResponse;
