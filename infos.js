// DB Blog: Plusieurs collections: 

// userSchema
    {
        // id généré automatiquement
        pseudo: "",
        email: ""
        
    }
    
// articleSchema

    {   // id généré automatiquement
        title: "",
        date: ISODate(),
        content: '',
        userSchema: ObjectId,
        
        
    }
    
// commentSchema
    
    {   
        // id généré automatiquement
        content: "",
        date: ISODate(),
        articleSchema: ObjectId
        userSchema: ObjectId,
        
    }
    
db.user.insert({pseudo: 'bernard', email: 'bernard@gmail.com', password: '123'})
db.articles.insert([{user: ObjectId("5063114bd386d8fadbd6b004"), title: 'titre1', content:'Contenu1'},{user: ObjectId("5063114bd386d8fadbd6b004"), title: 'titre2', content:'Contenu2'},{user: ObjectId("5063114bd386d8fadbd6b004"), title: 'titre3', content:'Contenu3'},{user: ObjectId("5063114bd386d8fadbd6b004"), title: 'titre4', content:'Contenu4'}, {user: ObjectId("5063114bd386d8fadbd6b004"), title: 'titre5', content:'Contenu5'}])
// db.articles.insert([{user: ObjectId("5063114bd386d8fadbd6b004"), title: 'titre1', content:'Contenu1'}


démarrer la base de donnés: 
mongosh "mongodb://mickaelmesloub@mongodb.3wa.io:27017"
password: 7ec5f7e95281aca82596dea572064987

// page détail doit afficher les détails de l'article: le chemin doit récupérer l'id /:id

