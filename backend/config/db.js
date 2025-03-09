import mongoose from "mongoose";
import "dotenv/config";

// Track connection state
let isConnected = false;

export const connectDB = async () => {
  // If already connected, return early
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  // Connection options
  const options = {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
  };

  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://parajulikiran:185120@cluster0.r0252.mongodb.net/restro",
      options
    );

    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);

    // Handle connection errors after initial connection
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      isConnected = false;
    });

    // Handle when the connection is disconnected
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
      isConnected = false;
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    isConnected = false;
    // Don't exit the process in serverless environments
    if (process.env.NODE_ENV !== "production") {
      process.exit(1);
    }
  }
};
