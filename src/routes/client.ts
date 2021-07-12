import { Router } from "express";
import ClientController from "../controller/ClientController";

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get('/',clientController.index);
clientRoutes.post('/',clientController.create);
clientRoutes.put('/:id',clientController.update); //vou alterar so uma coluna 


export default clientRoutes;

