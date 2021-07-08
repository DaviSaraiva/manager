import { Router } from "express";
import ClientController from "../controller/ClientController";

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get('/',clientController.index);

export default clientRoutes;

