import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://parajulikiran:185120@cluster0.r0252.mongodb.net/restro"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
