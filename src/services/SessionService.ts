import { compare } from "bcrypt";
import IUserRepository from "../repositories/IUserRespository";
import UserRepository from "../repositories/UserRepository";
import AppError from "../errors/AppError";
import { sign } from "jsonwebtoken";
import User from "../models/Users";

interface Request {
    email: string;
    password: string;
}

interface Response{
    token: string;
    user: User;
}

class SessionService {
    private  userRepository: IUserRepository;
    constructor (userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute({ email, password}:Request): Promise<Response>{
        //passar email
        const user = await this.userRepository.findByEmail(email);
        if(!user){
            throw new AppError('Credenciais invalidas', 401);
        }

        //passar senha
        const passwordCompare = await compare(password,user.password);
        if(!passwordCompare){
            throw new AppError('Credenciais invalidas', 401);
        };

        //se o usuario é ativo ou não
        if(!user.active){
            throw new AppError('Usuario inativo',401);
        }

        const token = sign({}, process.env.APP_SECRET as string,{
            expiresIn: '1d',
        });

        //não aparecer a senha no response.
        delete user.password;
        return {
            token,
            user,
        };
    }

}

export default SessionService;