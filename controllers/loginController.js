import bcrypt from 'bcrypt';

export const displayLoginPage = (req, res) => {
    res.render('login.ejs');
};


export const userLogin = (req, res) => {
    const saltRounds = 10;
     bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
         console.log(hash);
     });
     
     req.session.user = {
         pseudo: user.pseudo,
         email: user.email,
         isAdmin: false
     };
    // req.session.user
    // récupérer le user qui se connecte
    // ternaire isLogged ? si user, true, else, false
    // ternaire isAdmin ? si email = mp@gmail.com, true, else : false
    // if isLogged true: affiche bouton admin, sinon, non
    
    const {email, password} = req.body;
    // const user = await usermodel.findone({email})
    
};