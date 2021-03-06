import express from "express";
import { getOriginalUrl } from "../controller/web/get/getOriginalUrl.js";
import { postWeb } from "../controller/web/post/postWeb.js";
import { checkAuth } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/:path", getOriginalUrl);
router.post("/", postWeb);

export default router;
