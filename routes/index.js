import express from "express";
import Users from "./users.js";

const router = express.Router();
router.use("/users", Users);

export default router;
