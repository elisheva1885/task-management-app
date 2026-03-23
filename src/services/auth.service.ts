import { AppDataSource } from "../db/data-source.js";
import type { RegisterResponseDto } from "../dto/auth.dto.js";
import { User } from "../entities/User.entity.js";
import { AppError } from "../errors/app-errors.js";
import { encryptionPassword } from "../helpers/password-helper.js"

const userRepository = AppDataSource.getRepository(User);
const getUserByUsername = async(username: string) => {
    const existUser = await userRepository.findOne({
        where: { username }
    })
    return existUser;
}

export class AuthService {
    async register(username: string, password: string): Promise<RegisterResponseDto> {
        const existUser = await getUserByUsername(username);
        if (existUser) {
            throw new AppError("User already exist", 400)
        }
        const hashedPassword  = encryptionPassword(password);
        const user: User = userRepository.create({ username, password: hashedPassword  })
        await userRepository.save(user);
        return { id: user.id, username: user.username }
    }

}