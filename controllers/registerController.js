import userModel from '../models/userModel.js';



export const displayRegisterPage = (req, res) => {
    res.render('signup.ejs');
};

export const register = async(req, res, next) => {
    
    const createUser = await userModel.create({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password
    });
    
    // Séparer publicController et adminController
    
    // Quand je register: vérifier si user existe dans db. Si oui, redirect sur /register. Si non, log + redirect sur '/'
    // Pour vérifier si il existe: vérifier si pseudo ou email existent dans db.
    // Vérifier aussi si email === email.isAdmin. Si oui, c'est un admin donc il aura accès à tout le site.
    // Si non, c'est un user "lambda" et n'aura pas accès aux fonctionnalités d'admin
    // Si user lambda, pas accès à la page Administration
    // Si logged, hide les boutons "créer un compte" et "login" et afficher un bouton "logout".
    
    
    res.redirect('/');
    
    console.log(createUser);
    
};