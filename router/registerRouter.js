import express from 'express';
import {displayRegisterPage, register} from '../controllers/registerController.js';

const registerRouter = express.Router();

registerRouter.get('/register', displayRegisterPage);
registerRouter.post('/register', register);

export default registerRouter;