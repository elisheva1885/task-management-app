import { AuthService } from "../services/auth.service.js";
import { type Request , type Response } from "express";

const authService = new AuthService();
export class AuthController {
    async login(req: Request, res: Response) {
        const { username, password } = req.body;
        if(!username || !password){
            return res.status(400).json({message: "all details required"})
        }
        const token = await authService.login(username, password)
        res.status(200).json({token: token})
    }
}
