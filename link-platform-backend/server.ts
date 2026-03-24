import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({}));

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err: Error) => console.error("MongoDB connection error:", err));

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING.....");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
