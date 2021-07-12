import IClientsRepository from "../repositories/IClientsRepository";
import Client from "../models/Client";

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