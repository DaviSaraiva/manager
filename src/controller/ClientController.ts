import ClientRepository from "../repositories/ClientRepository";
import { Request, Response } from "express";


class ClientController {
    public async index(request: Request, response: Response): Promise<Response>{
        const clientRepository = new ClientRepository();
        const clients = await clientRepository.findAll();
        return response.json(clients)
    }
}

export default ClientController;