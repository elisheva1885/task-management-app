import { HttpStatus } from "../constants/http-status.js";
import type { RegisterRequestDto, RegisterResponseDto } from "../dto/auth.dto.js";
import { passwordScore } from "../helpers/password-helper.js";
import { AuthService } from "../services/auth.service.js";
import type { Request, Response } from "express";
const authService = new AuthService();
export class AuthController {
    async register(req: Request, res: Response) {
        const data: RegisterRequestDto = req.body;
        const { username, password } = data;
        const score = passwordScore(password)
        if (score <= 3) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: "password isn't strong enough" });
        }
        const user: RegisterResponseDto = await authService.register(username, password)
        return res.status(HttpStatus.CREATED).json(user);
    }
}