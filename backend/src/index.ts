import "dotenv/config"; // has to be first so env vars are loaded before anything else
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./utils/db";
import { logger } from "./utils/logger";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// quick check to see if the server is alive
app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "MannSaathi API is running" });
});

const start = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  } catch (err) {
    logger.error("Could not start server", err);
    process.exit(1);
  }
};

start();