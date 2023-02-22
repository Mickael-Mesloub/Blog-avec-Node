import mongoose from "mongoose";

const articleModel = new mongoose.Schema({
        title: {
            type: String,
        },
        content: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        image: {
            type: String
        }

    }, {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Article', articleModel);