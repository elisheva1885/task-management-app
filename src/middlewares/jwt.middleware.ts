import type { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'
import { configEnvironmentData } from "../config/config.js";
import type { AuthRequest } from "../types/auth.types.js";

export const authentication = (
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
        if (typeof decode === "string") {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!decode.id || !decode.username) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.currentUser = {
            id: decode.id,
            username: decode.username
        };
        next();

    } catch {
        return res.status(401).json({ message: "Unauthorized" })
    }
}