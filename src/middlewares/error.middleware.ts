import type { NextFunction, Response  , Request} from "express";
import { AppError } from "../errors/app-errors.js";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction):void => {
    if (error instanceof AppError) {
         res.status(error.statusCode).json({ message: error.message })
         return;
    }
     res.status(500).json({message: 'Internal server error'})
}