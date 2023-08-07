import express from "express";
import { auth } from "../controllers/auth.js";

const router = express.Router();

router.post('/auth', auth)

export default router;