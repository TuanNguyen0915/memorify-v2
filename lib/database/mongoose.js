import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if(isConnected) {
    console.log("Mongoose is already connected")
  return
  }
  try {
    await mongoose.connect(process.env.MONGO_URL,
      { bufferCommands: false });
    isConnected = true;
  } catch (err) {
    console.log(err);
  }
}