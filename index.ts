import Server from "./classes/server";
import express from 'express';
import { router } from './routes/router';
import cors from 'cors';
const server = new Server();

server.app.use(express.urlencoded({extended:true})); 
server.app.use(express.json());
// cors
server.app.use(cors({origin: true,credentials: true}));
// rutas de servicio
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
}); 
 