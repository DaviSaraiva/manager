import IClientsRepository from "../repositories/IClientsRepository";
import Client from "../models/Client";
import AppError from "../errors/AppError";

interface IRequest{
    id: string;
    name: string;
    email: string;
    telephone: string;
    cpf: string;
}

class UpdateClientService{
    
    private clientRepository : IClientsRepository;
    constructor(clientRepository : IClientsRepository){
        this.clientRepository = clientRepository;
    }

    public async execute({id,name,email, telephone,cpf}: IRequest): Promise<Client>{
        const client = await this.clientRepository.findById(id);
        if(!client){
            throw new AppError('Cliente nao encontrado', 400);
        }
        
        //se o email que eu tiver alterando for diferente do email do client eu vou verificar se ele ja esta cadastrado
        if(email != client.email){
            const Verifyemail = await this.clientRepository.findByEmail(email);
            if(Verifyemail){
                throw new AppError('Email ja esta sendo utilizado', 401);
            }
        }

        if(cpf != client.cpf){
            const verifyCpf = await this.clientRepository.findByCpf(cpf);
            if(verifyCpf){
                throw new AppError('Cpf ja esta sendo utilizado!', 401);
            }
        }
       
        
        client.name = name;
        client.email = email;
        client.telephone = telephone;
        client.cpf = cpf;

        await this.clientRepository.save(client);

        return client;
        
    }
}

export default UpdateClientService;