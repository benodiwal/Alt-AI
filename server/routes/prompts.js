import express from "express";
import getPrompt from "../controllers/getPrompt.js";

const router = express.Router();
router.get('/prompts', getPrompt);

export default router;