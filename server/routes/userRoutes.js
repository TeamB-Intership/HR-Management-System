import express from "express";
import userController from "../controllers/usersController.js";

const router = express.Router();

// Register user
router.post("/register", userController.register);

// Login user
router.post("/login", userController.login);

export default router;
