import { encryptionPassword } from "../helpers/helpers.js"
import { AppDataSource } from "../repositories/auth.repository.js";

const userRepository = AppDataSource.getRepository(User);


export class AuthService {
    async register(username: string, password: string) {
        const existUser = await userRepository.find({
            where: { username: username }
        })
        if (existUser) {
            throw new Error("User allready exist")
        }
        const hashPass = encryptionPassword(password);

        const user = userRepository.create({ username, hashPass })
        return await userRepository.save(user);
    }

}