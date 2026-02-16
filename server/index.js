import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credientials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "App running" });
});

app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log("server running on ", PORT);
  connectDB();
});
