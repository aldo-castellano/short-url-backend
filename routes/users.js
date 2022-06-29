import express from "express";
import { getUsers } from "../controller/users/get/getUsers.js";
import { getConfirm } from "../controller/users/get/getConfirm.js";
import { getProfile } from "../controller/users/get/getProfile.js";
import { postUser } from "../controller/users/post/postUser.js";
import { autenticateUser } from "../controller/users/post/autenticateUser.js";
import { checkAuth } from "../middleware/authMiddleware.js";
import { changePassword } from "../controller/users/post/changePassword.js";
import { requestPassword } from "../controller/users/post/requestPassword.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/register", postUser);
router.post("/login", autenticateUser);
router.get("/confirm", checkAuth, getConfirm);
router.post("/request-new-Password", requestPassword);
router.post("/change-password", checkAuth, changePassword);
router.get("/profile", checkAuth, getProfile);

export default router;
