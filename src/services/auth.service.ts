
import type { Repository } from "typeorm";
import { AppDataSource } from "../db/data-source.js";
import { User } from "../entities/User.entity.js";
import { AppError } from "../errors/app-errors.js";
import { comparePassword, generateToken } from "../helpers/helpers.js";

const userRepository = AppDataSource.getRepository(User);


export class AuthService {

    async login(username: string, password: string) {
        const user = await userRepository.findOne({
            where: { username }
        })
        if (!user) {
            throw new AppError("Unauthorized", 401);
        }
        const isMatch = await comparePassword(password, user.password)
        if (!isMatch) {
            throw new AppError("Unauthorized", 401);
        }
        const userInfo = { id: user.id, username: user.username }
        return generateToken(userInfo);
    }

}
