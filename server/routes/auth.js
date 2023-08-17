import express from "express";
import { auth } from "../controllers/auth.js";
import getImage from "../controllers/getImage.js";
import getPrompt from "../controllers/getPrompt.js";

const router = express.Router();
router.post('/auth/google/callback', auth);
router.post('/getImage', getImage);

export default router;