import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());

app.use("", userRoutes);

export default app;
