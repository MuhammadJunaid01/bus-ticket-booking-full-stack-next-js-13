import mongoose from "mongoose";
import config from "@/config";
const { MONGODB_URI } = config.database;
export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose.connect(MONGODB_URI);
    console.log("CONNECT DB>>>>>>>>>>");
  } catch (error) {
    console.error(error);
  }
};
