import mongoose from 'mongoose';

const commentModel = new mongoose.Schema({
    content: { 
        type: String
    },
    date: {type: Date, default: Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    article: {type: mongoose.Schema.Types.ObjectId, ref: "Article"}
});

export default mongoose.model("Comment", commentModel);
