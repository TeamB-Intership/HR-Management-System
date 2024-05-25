import User from "../models/users.js";

//register a user
export const register = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    country,
    phoneNumber,
  } = req.body;
  try {
    const currUser = await User.find({ email: req.body.email });
    if (currUser.length === 0) {
      const newuser = new User({
        firstname,
        lastname,
        username,
        email,
        password,
        country,
        phoneNumber,
      });
      newuser.save().catch((err) => console.log(err));
      console.log("user created successfully");
    } else {
      console.log("user exists");
    }
  } catch (error) {
    console.log(error);
  }
  res.send("success");
};

//login a user
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const currUser = await User.findOne({ email });
    if (currUser) {
      if (currUser.password === password) {
        console.log("login success");
      } else {
        console.log("login failed");
      }
    } else {
      console.log("user does not exists");
    }
  } catch (error) {
    console.log(err);
  }
  res.send("req sent");
};

export default { register, login };
