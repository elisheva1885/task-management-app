import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { configData } from "../config/config.js";
import type { AuthRequest } from "../types/express.js";

export const authentification = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const header = req.headers.authorization;
    if (!header) {
        res.status(401).json({ message: "Unauthorized" })
    }
    const token = header!.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Unauthorized" })
    }
    const decode = jwt.verify(token!, configData.jwt)
    if (!decode) {
        res.status(401).json({ message: "Unauthorized" })
    }
    req.currentUser = decode;
    next();
}