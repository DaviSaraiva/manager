import { Router } from "express";
import ClientController from "../controller/ClientController";
import authentication from "../middlewares/auth";

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.use(authentication);

clientRoutes.get('/',clientController.index);
clientRoutes.get('/paginated',clientController.paginated);
clientRoutes.get('/searchname',clientController.search);
clientRoutes.post('/',clientController.create);
clientRoutes.put('/update/:id',clientController.update); 
clientRoutes.delete('/delete/:id',clientController.destroy); 




export default clientRoutes;

