import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import type { AuthRequest } from "../types/auth.types.js";
import { configEnvironmentData } from "../config/config.js";

export const authentication  = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try { 
        const decode = jwt.verify(token, configEnvironmentData.jwt)
        req.currentUser = decode;
        next();

    }catch{
        return res.status(401).json({ message: "Unauthorized" })
    }
}
