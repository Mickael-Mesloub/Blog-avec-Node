import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    pseudo: {
        type: String
    },
    email: { 
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean
    }
},  {
    timestamps: true,
    versionKey: false
    }
);

export default mongoose.model("User", userModel);