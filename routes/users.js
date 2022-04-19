import express from "express";
import { getUsers } from "../controller/users/get.js";
import { postUser } from "../controller/users/post.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/", postUser);

export default router;
