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
// app.use("/", (rep, res) => {
//   res.send("hola mundo");
// });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT}`);
});
