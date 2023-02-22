import articleModel from '../models/articleModel.js';
import userModel from '../models/userModel.js';
import formidable from 'formidable';
import fs from 'fs';


// Affichage page admin
export const displayAdminPage = async(req, res) => {
    const articles = await articleModel.find();
    res.render('backoffice.ejs', {articles: articles});
};


// Ajouter un article 
export const addArticle = (req, res) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
        const user = new userModel({
            pseudo: fields.pseudo,
            email: fields.email
        });
        
        let oldpath = files.image.filepath;
        let newpath = './images/' + files.image.originalFilename;
        fs.copyFile(oldpath, './public/' + newpath, function (err){
            if (err) throw err;
        });
        const article = new articleModel({
            title: fields.title,
            content: fields.content,
            user: user,
            image: newpath
        });
        if(err){
            console.log("Une erreur est surevenue");
        }
        else{
            article.save(() => {
                res.redirect('/');
            });
        }
    });
};

// Supprimer un article
export const deleteArticle = async (req,res) => {
    const ID = req.params.id;
    articleModel.findByIdAndDelete(ID, (err) => {
        if(err) console.log(err);
            console.log("Article supprimé avec succès!");
        });
    res.redirect("/admin");
};