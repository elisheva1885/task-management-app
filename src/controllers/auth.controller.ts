import { AuthService } from "../services/auth.service.js";
import { type Request , type Response} from "express";

const authService = new AuthService();
export class AuthController {
    async signup(req: Request, res: Response):  Promise<void> {
        const { username, password } = req.body;
        const user = await authService.register(username, password)
        res.status(201).json(user);
    }
}