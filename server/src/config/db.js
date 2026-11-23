import mongoose from "mongoose";
import env from "./env.js";

export default async function connectDB() {
  try {
    const connection = await mongoose.connect(env.mongoUri);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    console.error(
      "Make sure MongoDB is installed and running, or update MONGODB_URI in server/.env"
    );
    process.exit(1);
  }
}
