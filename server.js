import express from 'express';
import mongoose from "mongoose";
import publicRouter from './router/publicRouter.js';
import adminRouter from './router/adminRouter.js';
import loginRouter from './router/loginRouter.js';
import registerRouter from './router/registerRouter.js';
import session from 'express-session';
import parseurl from 'parseurl';
import bcrypt from 'bcrypt';

const app = express();
const PORT = 9834;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://mickaelmesloub:7ec5f7e95281aca82596dea572064987@mongodb.3wa.io:27017/mickaelmesloub?authSource=admin');

mongoose.connection.on("error", () => {
    console.log("Erreur lors de la connexion à la base de données");
});

mongoose.connection.on("open", () => {
    console.log("Connexion à la base de donénes établie");
    app.use('/', publicRouter);
});

app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 3600000}
}));

// app.use('/admin', [auth.isAdmin], routerAdmin)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});