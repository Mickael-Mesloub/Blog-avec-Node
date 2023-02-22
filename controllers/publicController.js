import articleModel from '../models/articleModel.js';

// Affichage page d'accueil
export const displayHomePage = async(req, res) => {
    const articles = await articleModel.find();
    res.render('home', {articles: articles});
};

// Affichage page détail articles
export const displayArticlePage = async(req, res) => {
    const articles = await articleModel.find();
    res.render('articles.ejs', {articles: articles[req.params.id]});
};