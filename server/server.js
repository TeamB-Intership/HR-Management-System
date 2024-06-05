import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import sessionMiddleware from "./middleware/session.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(sessionMiddleware);
app.use("", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
