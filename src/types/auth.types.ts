import type { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      currentUser:  CurrentUser;
    }
  }
}

export interface CurrentUser {
    id: string,
    username: string
}

export type AuthRequest = Request;
