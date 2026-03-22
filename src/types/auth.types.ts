import type { Request } from "express";
import jwt from 'jsonwebtoken'


export interface AuthRequest extends Request{
    currentUser?: jwt.JwtPayload | string
}