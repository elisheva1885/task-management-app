import type { NextFunction, Response, Request } from "express";
import { AppError } from "../errors/app-errors.js";
import { HttpStatus } from "../constants/http-status.js";


export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
     if (error instanceof AppError) {
          res.status(error.statusCode).json({ message: error.message })
          return;
     }
     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
}