import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";


const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('database Connected')
    } catch (error) {
        console.log('Database connection failed. ', error)
        process.exit(1)
    }
}


export default connectDb