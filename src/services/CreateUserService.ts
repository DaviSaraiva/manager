import { hash } from "bcrypt";
import User from "../models/Users";
import IUserRepository from "../repositories/IUserRespository";
import UserRepository from "../repositories/UserRepository";

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    private  userRepository: IUserRepository;

    constructor (userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute({name, email, password}:Request): Promise<User>{
        const passwordHash = await hash(password, 8)
        const user= await this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });
        return user;
    }

}

export default CreateUserService;