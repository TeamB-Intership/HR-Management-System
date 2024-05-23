import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import User from "./models/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process on database connection error
  }
}

app.post("/register", async (req, res) => {
  try {
    // const currUser = await User.find({ email: req.body.email });
    // if (!currUser.length) {
    const newuser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      phoneNumber: req.body.phoneNumber,
    });
    newuser.save().catch((err) => console.log(err));
    // }
  } catch (error) {
    console.log(error);
  }
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
