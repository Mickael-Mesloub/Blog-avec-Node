import express from 'express';
import {displayHomePage, displayArticlePage} from '../controllers/publicController.js';
// import {displaySignupPage, signup} from '../controllers/signup.js';

const publicRouter = express.Router();

publicRouter.get('/' , displayHomePage);
publicRouter.get('/article/:id', displayArticlePage);

export default publicRouter;