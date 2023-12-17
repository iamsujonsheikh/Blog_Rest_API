import mongoose from "mongoose";


const database = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(database);
        console.log("Database connection successfull.".bgGreen.black)
    } catch (error) {
        console.log(`Database connection failed. ${error.message}`.bgRed.bold)
    }
};

export default connectDB;