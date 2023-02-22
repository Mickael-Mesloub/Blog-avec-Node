export const isAdmin = (req, res, next) => {
    if(!req.session.user.isAdmin){
        
        res.redirect('/');
        
    } else {
        
        next();
        
    }
};