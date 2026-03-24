import type { Request } from "express";
import jwt from 'jsonwebtoken'


export interface AuthRequest extends Request{
    currentUser?:  CurrentUser;
}

export interface CurrentUser {
    id: string,
    username: string
}