import { hash } from "bcrypt";
import User from "../models/Users";
import IUserRepository from "../repositories/IUserRespository";
import UserRepository from "../repositories/UserRepository";
import AppError from "../errors/AppError";

interface Request {
    id: string;
}

class EnableUserService {

    private  userRepository: IUserRepository;

    constructor (userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute({id}:Request): Promise<User>{ 
        const user = await this.userRepository.findById(id);   
        if(!user){
            throw new AppError('Usuario não encontrado',400);
        };
        user.active = !user.active;
        await this.userRepository.save(user);
        return user;
    }
}

export default EnableUserService;