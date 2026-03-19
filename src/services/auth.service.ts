import { AppDataSource } from "../db/data-source.js";
import { User } from "../entities/User.entity.js";
import { AppError } from "../errors/app-errors.js";
import { encryptionPassword } from "../helpers/helpers.js"

const userRepository = AppDataSource.getRepository(User);


export class AuthService {
    async register(username: string, password: string) {
        const existUser = await userRepository.findOne({
            where: { username: username }
        })
        if (existUser) {
            throw new AppError("User already exist",400)
        }
        const hashPass = encryptionPassword(password);
        const user : User = userRepository.create({ username,password:  hashPass })
        await userRepository.save(user);
        return {id: user.id ,  username: user.username}
    }

}