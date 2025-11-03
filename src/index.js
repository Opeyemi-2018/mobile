import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import dotenv from "dotenv";
import { connectDb } from "./libs/db.js";
import job from "./libs/cron.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

job.start();
app.use(express.json({ limit: "10mb" })); // increase limit for image uploads
app.use(express.urlencoded({ extended: true, limit: "10mb" })); 

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});
