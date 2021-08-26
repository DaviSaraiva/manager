import {Request, Response, NextFunction} from 'express';
import AppError from '../errors/AppError';
import { verify } from 'jsonwebtoken';

const authentication = (req: Request, res: Response, next: NextFunction ):Promise<any> |void=>{
  const authHeader = req.headers.authorization;
  if(!authHeader){
    throw new AppError('Jwt token nao passado',401);
  }
  // bears token
  const [,token] = authHeader.split(' ');
  try{
    verify(token, String(process.env.APP_SECRET));
    next();
  }catch{
    throw new AppError('Jwt token invalido',401);
  }
};

export default authentication;