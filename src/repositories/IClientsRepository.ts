import Client from "../models/Client";
import ICreateClientDTO from "../dtos/ICreateClientDTO";


// cria as funcoes 
export default interface IClientsRepository {
   findAll(): Promise<Client[]>;
   findById(id: string): Promise<Client | undefined>;
   findByEmail(email: string): Promise<Client | undefined>;
   findByName(name: string): Promise<Client[] | undefined>;
   findByCpf(cpf: string): Promise<Client | undefined>;
   create(createClientDTO: ICreateClientDTO): Promise<Client>;
   save(client:Client): Promise<Client>;
   findAllPaginated(page:number): Promise<[Client[], number]>; //o number no typeorm vai retorna a quantidade total de clients
   delete(id: string): Promise<void>;
}