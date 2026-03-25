import type { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'
import { configEnvironmentData } from "../config/config.js";
import type { AuthRequest } from "../types/auth.types.js";

// const unauthorized = () => res.status(401).json({ message: "Unauthorized" });


export const authentication = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const header = req.headers.authorization;
    const unauthorized = () => res.status(401).json({ message: "Unauthorized" });

    if (!header) {
        return unauthorized()
    }
    const token = header.split(" ")[1];
    if (!token) {
        return unauthorized();
    }
    try {
        const decode = jwt.verify(token, configEnvironmentData.jwt)
        if (typeof decode === "string") {
            return unauthorized();
        }

        if (!decode.id || !decode.username) {
            return unauthorized();
        }
        req.currentUser = {
            id: decode.id,
            username: decode.username
        };
        next();

    } catch {
        return unauthorized();
    }
}
