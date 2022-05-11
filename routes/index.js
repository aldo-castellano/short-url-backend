import express from "express";
import Web from "./web.js";
import Users from "./users.js";

const router = express.Router();
router.use("/users", Users);
router.use("/webs", Web);

export default router;
