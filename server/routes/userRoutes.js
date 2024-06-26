import express from "express";
import userController from "../controllers/usersController.js";

const router = express.Router();

// Register user
router.post("/register", userController.register);

// Login user
router.post("/login", userController.login);

//Logout user
router.post("/logout", userController.destroy_session);

//route to check if the sessions are working or not
router.post("/profile", userController.create_session);

//this route is used to add a new employee to the database
router.post("/addEmployee", userController.addEmployee);

export default router;
