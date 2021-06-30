import CreateUserDTO from "../dtos/CreateUserDTO";
import User from "../models/Users";


// cria as funcoes 
export default interface IUserRepository {
    findByEmail(email:string): Promise<User | undefined>;
    findById(id:string): Promise<User | undefined>;
    create(createUserDTO: CreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
    }