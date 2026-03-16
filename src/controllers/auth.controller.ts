import { AuthService } from "../services/auth.service.js";

export class AuthController{
    const signup = (req: Request, res: Response)=>{
        const { username, password} = req.body;
       const user = await AuthService.register(username,password);
       res.json(user);
    }
    const login = (req: Request, res: Response)=>{
        const { username, password} = req.body;
        await AuthService.login(username, password)
    }

}