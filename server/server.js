// import dotenv from "dotenv";
// dotenv.config();
import app from "./app.js"
import config from "./config/config.js";

// import express from "express";
// import mongoose from "mongoose";
// import User from "./models/users.js";

// const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.json());

// main()
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   try {
//     await mongoose.connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     process.exit(1); // Exit the process on database connection error
//   }
// }

// //route for login
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const currUser = await User.findOne({ email });
//     if (currUser) {
//       if (currUser.password === password) {
//         console.log("login success");
//       } else {
//         console.log("login failed");
//       }
//     } else {
//       console.log("user does not exists");
//     }
//   } catch (error) {
//     console.log(err);
//   }
//   res.send("req sent");
// });

// //route for register
// app.post("/register", async (req, res) => {
//   const {
//     firstname,
//     lastname,
//     username,
//     email,
//     password,
//     country,
//     phoneNumber,
//   } = req.body;
//   try {
//     const currUser = await User.find({ email: req.body.email });
//     if (currUser.length === 0) {
//       const newuser = new User({
//         firstname,
//         lastname,
//         username,
//         email,
//         password,
//         country,
//         phoneNumber,
//       });
//       newuser.save().catch((err) => console.log(err));
//       console.log("user created successfully");
//     } else {
//       console.log("user exists");
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   res.send("success");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
