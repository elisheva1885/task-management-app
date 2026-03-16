export class AuthService {
    const register = (username: string, password: string)=> {
        //add check if the user isnt exist
        return await userRepository.save(user);
    }
}