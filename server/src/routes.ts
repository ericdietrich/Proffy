import express from 'express';
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';


const routes = express.Router();
const classControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

routes.get('/connections', connectionsControllers.index)
routes.post('/connections', connectionsControllers.create)

export default routes;