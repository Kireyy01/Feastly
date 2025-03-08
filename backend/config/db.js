import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://parajulikiran:185120@cluster0.r0252.mongodb.net/restro').then(()=>console.log("DB connected"));
}