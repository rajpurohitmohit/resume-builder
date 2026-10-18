import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// Database Connection
await connectDB();

app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("new world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
