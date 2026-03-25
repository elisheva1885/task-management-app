
import { AppDataSource } from "../db/data-source.js";
import { User } from "../entities/User.entity.js";
import { AppError } from "../errors/app-errors.js";
import { comparePassword, generateToken, type UserInfo } from "../helpers/helpers.js";
import { encryptionPassword } from "../helpers/password-helper.js";
import type { RegisterResponseDto } from "../dto/auth.dto.js";

const userRepository = AppDataSource.getRepository(User);


export class AuthService {

    getUserByUsername = async (username: string) => {
        const existUser = await userRepository.findOne({
            where: { username }
        })
        return existUser;
    }

    async register(username: string, password: string): Promise<RegisterResponseDto> {
        const existUser = await this.getUserByUsername(username);
        if (existUser) {
            throw new AppError("User already exist", 400)
        }
        const hashedPassword = encryptionPassword(password);
        const user: User = userRepository.create({ username, password: hashedPassword })
        await userRepository.save(user);
        return { id: user.id, username: user.username }
    }

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
        const userInfo : UserInfo = { id: user.id, username: user.username }
        return generateToken(userInfo);
    }
}

