import IClientsRepository from "../repositories/IClientsRepository";
import Client from "../models/Client";
import AppError from "../errors/AppError";

interface IRequest{
    name: string;
    email: string;
    telephone: string;
    cpf: string;
}

class CreateClientService{
    
    private clientRepository : IClientsRepository;
    
    constructor(clientRepository : IClientsRepository){
        this.clientRepository = clientRepository;
    }

    public async execute({name,email, telephone,cpf}: IRequest): Promise<Client>{
        const verifyClient = await this.clientRepository.findByEmail(email);
        if(verifyClient){
            throw new AppError('Cliente ja existe', 401);
        }

        const verifyCpf= await this.clientRepository.findByCpf(cpf);
        if(verifyCpf){
            throw new AppError('Cpf ja cadastrado!', 401);
        }

        const client = this.clientRepository.create({
            name,
            email,
            telephone,
            cpf,
        });
        return client;
    }
}

export default CreateClientService;