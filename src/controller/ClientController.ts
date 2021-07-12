import ClientRepository from "../repositories/ClientRepository";
import { Request, Response } from "express";
import CreateClientService from "../services/CreateClientService";


class ClientController {
    public async index(request: Request, response: Response): Promise<Response>{
        const clientRepository = new ClientRepository();
        const clients = await clientRepository.findAll();
        return response.json(clients);
    }
    
    public async create(request: Request, response: Response): Promise<Response>{
        //criação de clients
        const {name, email,telephone,cpf} = request.body;
        const clientRepository = new ClientRepository();
        const createClient = new CreateClientService(clientRepository);
        const client = await createClient.execute({
            name, 
            email,
            telephone,
            cpf,
        });
        return response.status(201).json(client);
    }
}

export default ClientController;