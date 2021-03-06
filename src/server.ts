import 'reflect-metadata';
import './config/env';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import './database';
import routes from './routes';
import AppError from './errors/AppError';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err:Error, request: Request, response: Response, _:NextFunction )=>{
     if(err instanceof AppError){
          return response.status(err.statusCode).json({status: 'error', message: err.message});
     }
     return response.status(500).json({status: 'error', message: 'Erros inerteno no servidor'});

});
app.listen(3333,()=>{
     console.log('App rodando na porta 3333')
    });


