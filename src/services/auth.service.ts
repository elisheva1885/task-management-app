
import { AppDataSource } from "../db/data-source.js";
import { User } from "../entities/User.entity.js";
import { AppError } from "../errors/app-errors.js";
import { comparePassword, generateToken } from "../helpers/helpers.js";

const userRepository = AppDataSource.getRepository(User);


export class AuthService {
    async login(username: string, password: string) {
        const existUser = await userRepository.findOne({
            where : {username: username}
        })
        if(!existUser){
            throw new AppError("'Unauthorized", 401);
        }
        const match = await comparePassword(password, existUser.password)
        if(!match)
        {
            throw new AppError("'Unauthorized", 401);
        }
        const userInfo =  {id: existUser.id, username: existUser.username}
        const userToken = generateToken(userInfo);
        return userToken;
    }

}
