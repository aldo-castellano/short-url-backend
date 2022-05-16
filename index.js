import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routerIndex from "./routes/index.js";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

connectDB();

app.use("/api", routerIndex);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
