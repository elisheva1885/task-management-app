import { AuthService } from "../services/auth.service.js";


const authService = new AuthService();
export class AuthController {
    async signup(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = await authService.register(username, password)
        res.json(user)
    }
}