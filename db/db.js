// db.js

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

let connectionInstance;

const connectDB = async () => {
    if (connectionInstance) {
        return connectionInstance; // If connection already exists, return it
    }

    try {
        connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\nMongoDb connected !! DB Host: ${connectionInstance.connection.host}`);
        return connectionInstance;
    } catch (err) {
        console.log('Mongodb connection error ', err);
        process.exit(1);
    }
}

export default connectDB;
