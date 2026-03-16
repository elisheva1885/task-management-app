import { AuthService } from "../services/auth.service.js";

export class AuthController{
    static async signup(req: Request, res: Response){
        const { username, password} = req.body;
       const user = await AuthService.register(username,password);
       res.json(user);
    }
}