import { Router } from "express";
import UserController from "../controller/UserController";
import authentication from "../middlewares/auth";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/',userController.create);
userRoutes.patch('/:id',authentication,userController.enable); //vou alterar so uma coluna 



export default userRoutes;