import express from "express";
import chat from "../controllers/chat.js";

const router = express.Router();

router.post('/chat', chat);

export default router;