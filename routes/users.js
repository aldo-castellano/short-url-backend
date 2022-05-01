import express from "express";
import { getUsers } from "../controller/users/get/getUsers.js";
import { getProfile } from "../controller/users/get/getProfile.js";
import { postUser } from "../controller/users/post/postUser.js";
import { autenticateUser } from "../controller/users/post/autenticateUser.js";
import { checkAuth } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/register", postUser);
router.post("/login", autenticateUser);
router.get("/profile", checkAuth, getProfile);

export default router;
