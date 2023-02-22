import userModel from '../models/userModel.js';

export const displaySignupPage = async (req, res) => {
  const users = await userModel.find();
  res.render('signup.ejs', { users: users });
};

export const signup = (req, res) => {
    console.log(req.body);
    const user = new userModel({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password,
    });

    // Vérifier si l'utilisateur existe déjà
    userModel.findOne(
        
        { $or: [{ email: req.body.email }, { pseudo: req.body.pseudo }] },
        (err, existingUser) => {
            
        if (existingUser) {
            
          res.redirect('/signup');
          console.log('Cet utilisateur existe déjà.');
          
        } else {
      // Ajouter un nouvel utilisateur
            user.save((err) => {
            if (err) {
                
                console.log("L'utilisateur n'a pas pu être créé.");
              
            } else {
                
                console.log(`Félicitations! L'utilisateur ${user} a bien été ajouté à la base de données!`);
                res.redirect('/');
            }
        });
        }
    });
};
