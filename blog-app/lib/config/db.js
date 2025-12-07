import mongoose from "mongoose";

const ConnectDB = async () => {

    await mongoose.connect('mongodb+srv://lohanibiswas1_db_user:biswas@cluster0.kj1uvin.mongodb.net/blog-app')

    console.log('Db connected');
    
}

export default ConnectDB;