import { Router } from "express";
import ClientController from "../controller/ClientController";

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get('/',clientController.index);
clientRoutes.get('/paginated',clientController.paginated);
clientRoutes.post('/',clientController.create);
clientRoutes.put('/:id',clientController.update); 




export default clientRoutes;

