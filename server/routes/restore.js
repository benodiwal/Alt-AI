import express from "express";
import restore from "../controllers/restore.js";
import upload from "../middleware/mutler_middleware.js";

const router = express.Router();

router.post('/restore', upload.single('image'), restore);

export default router;