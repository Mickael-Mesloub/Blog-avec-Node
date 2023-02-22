import express from 'express';
import {displayAdminPage, addArticle, deleteArticle} from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.get('/admin', displayAdminPage);
adminRouter.post('/admin', addArticle);
adminRouter.post('/article/:id/delete', deleteArticle);

export default adminRouter;