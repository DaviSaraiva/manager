import { Router } from "express";
import ClientController from "../controller/ClientController";

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get('/',clientController.index);
clientRoutes.get('/paginated',clientController.paginated);
clientRoutes.get('/searchname',clientController.search);
clientRoutes.post('/',clientController.create);
clientRoutes.put('/update/:id',clientController.update); 
clientRoutes.delete('/delete/:id',clientController.destroy); 




export default clientRoutes;

