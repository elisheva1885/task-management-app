import type { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'
import { configEnvironmentData } from "../config/config.js";
import type { AuthRequest } from "../types/auth.types.js";
import { HttpStatus } from "../constants/http-status.js";

export const authentication = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const unauthorized = () => res.status(HttpStatus.UNAUTHORIZED).json({ message: "unauthorized" });
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return unauthorized();
    }
    const token = header.split(" ")[1];
    if (!token) {
        return unauthorized();
    }
    try {
        const decoded = jwt.verify(token, configEnvironmentData.jwt)
        if (typeof decoded === "string") {
            return unauthorized();
        }
        if (!decoded.id || !decoded.username) {
            return unauthorized();
        }
        req.currentUser = {
            id: decoded.id,
            username: decoded.username
        };
        next();

    } catch {
        return unauthorized();
    }
}
