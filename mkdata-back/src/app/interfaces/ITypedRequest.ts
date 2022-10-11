import { ParamsDictionary, Query, Request } from 'express-serve-static-core';

interface ITypedRequest<
  T = {},
  U extends Query = {},
  V extends ParamsDictionary = {}
> extends Request {
  body: T;
  query: U;
  params: V;
}

export { ITypedRequest };
