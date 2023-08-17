import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import mongoose from "mongoose";
import auth_router from "./routes/auth.js";
import prompt_router from "./routes/prompts.js";
import restore_router from "./routes/restore.js";
import chat_router from "./routes/chat.js";

const app = express();
dotenv.config();

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* ROUTES */
app.use("/", auth_router);
app.use("/image", prompt_router);
app.use('/restore', restore_router);
app.use('/', chat_router);

/* MONGODB_SETUP */
const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
  console.log("Mongodb connected");
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
})
.catch((err) => console.log("Error in mongodb: ", err));