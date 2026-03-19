import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { configData } from "../config/config.js";
import type { AuthRequest } from "../types/express.types.js";

export const authentification = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const token = header!.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const decode = jwt.verify(token, configData.jwt)
        req.currentUser = decode;
        next();

    }catch (err) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}
