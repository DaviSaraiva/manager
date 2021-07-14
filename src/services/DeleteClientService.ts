import IClientsRepository from "../repositories/IClientsRepository";
import Client from "../models/Client";
import AppError from "../errors/AppError";

interface IRequest{
    name: string;
    email: string;
    telephone: string;
    cpf: string;
}

class DeleteClientService{
    
    
}

export default DeleteClientService;