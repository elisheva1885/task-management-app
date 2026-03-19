import type { NextFunction, Response } from "express";
import { AppError } from "../errors/app-errors.js";


export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
    }
    return res.status(500).json({message: 'Internal server error'})
}