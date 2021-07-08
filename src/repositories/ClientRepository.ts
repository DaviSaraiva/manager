import IClientsRepository from "./IClientsRepository";
import { Repository, getRepository } from "typeorm";
import Client from "../models/Client";
import ICreateClientDTO from "../dtos/ICreateClientDTO";

//implemantação das funções de criação de clientes
class ClientRepository implements IClientsRepository{
    private ormRepository: Repository<Client>

    constructor(){
        this.ormRepository = getRepository(Client);
    }

    public async findAll(): Promise<Client[]> {
        return this.ormRepository.find();
    }

    public async findById(id: string): Promise<Client | undefined> {
        return this.ormRepository.findOne({
            where:{id},
        });
    }

    public async findByEmail(email: string): Promise<Client | undefined> {
        const client =  await this.ormRepository.findOne({
            where:{email}
        });
        return client;
    }

    public async create({name,email,telephone,cpf}: ICreateClientDTO): Promise<Client> {
        const client = this.ormRepository.create({
            name,
            email,
            telephone,
            cpf
        });
        await this.ormRepository.save(client);
        return client
    }

    public async save(client: Client): Promise<Client> {
        return this.ormRepository.save(client)
    }

}

export default ClientRepository;