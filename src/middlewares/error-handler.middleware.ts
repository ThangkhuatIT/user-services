import { NextFunction, Response, Request } from "express";
import ApiError from "../utils/ApiError";

export default function errorHandlingMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    const responseError = {
      statusCode: err.statusCode,
      message: err.message,
    };
  
    return res.status(responseError.statusCode).json(responseError);
  }

  return res.status(500).json({
    message: "Something went wrong!"
  });
};