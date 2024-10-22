import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsinc = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err));
  };
};

export default catchAsinc;
