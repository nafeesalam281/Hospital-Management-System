import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export const dbConnection = () => {
    const mongoUri = process.env.MONGO_URI;
    //const mongoUri = "mongodb://nafeesalam281:9SOIlK0AiN9fb09L@cluster0-shard-00-00.27qks.mongodb.net:27017,cluster0-shard-00-01.27qks.mongodb.net:27017,cluster0-shard-00-02.27qks.mongodb.net:27017/?ssl=true&replicaSet=atlas-k15uld-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
    if (!mongoUri) {
        console.error("MONGO_URI is not defined in the environment variables.");
        return;
    }

    mongoose.connect(mongoUri, {
        dbName: "MERN_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(() => {
        console.log("DB Connected");
    }).catch(err => {
        console.error(`Error in database connection: ${err}`);
    });
};
