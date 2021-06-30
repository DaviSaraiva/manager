import { Router } from "express";
import UserController from "../controller/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/',userController.create);
userRoutes.patch('/:id',userController.enable); //vou alterar so uma coluna 



export default userRoutes;