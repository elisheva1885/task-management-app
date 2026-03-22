import type { RegisterRequestDto, RegisterResponseDto } from "../dto/auth.dto.js";
import { passwordScore } from "../helpers/password-helper.js";
import { AuthService } from "../services/auth.service.js";
import { type Request, type Response } from "express";
const authService = new AuthService();
export class AuthController {
    async register(req: Request, res: Response) {
        
        const data: RegisterRequestDto = req.body;
        if (!data.username || !data.password) {
            return res.status(400).json({ message: "All details required" })
        }
        if (typeof data.username !== "string" || typeof data.password !== "string") {
            return res.status(400).json({ message: "Invalid input" });
        }
        const score = passwordScore(data.password)
        if(score <=3 ){
            return res.status(400).json({ message: "password isn't strong enough" });
        }
        const user : RegisterResponseDto = await authService.register(data.username, data.password)
        return res.status(201).json(user);
    }
}