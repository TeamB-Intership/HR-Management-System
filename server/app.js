import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import db from "./config/db.js";

const app = express();
app.use(bodyParser.json());

app.use("", userRoutes);

export default app;
