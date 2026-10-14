import mongoose from "mongoose";
import { logger } from "./logger";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  // fail early with a clear message, otherwise mongoose throws something confusing
  if (!uri) {
    throw new Error("MONGODB_URI is missing in .env");
  }

  await mongoose.connect(uri);
  logger.info("MongoDB connected");
};