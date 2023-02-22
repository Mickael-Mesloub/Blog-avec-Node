import express from 'express';
import {displayLoginPage, userLogin} from '../controllers/loginController.js';

const loginRouter = express.Router();

loginRouter.get('/login', displayLoginPage);
loginRouter.post('/login', userLogin);

export default loginRouter;