import type { Request } from "express";


export interface AuthRequest extends Request{
    currentUser?:  CurrentUser;
}

export interface CurrentUser {
    id: string,
    username: string
}