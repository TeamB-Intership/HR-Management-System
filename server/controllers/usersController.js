import User from "../models/users.js";
import bcrypt from "bcrypt";
import Employee from "../models/employee.js";

//register a user
export const register = async (req, res) => {
  const { firstname, lastname, username, email, password, phoneNumber } =
    req.body;

  try {
    const currUser = await User.findOne({ email });

    if (currUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newuser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await newuser.save().catch((err) => console.log(err));
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//login a user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const currUser = await User.findOne({ email });

    if (!currUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, currUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      req.session.user = currUser;
      res.status(200).json({ message: "Login success" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//create session
export const create_session = async (req, res) => {
  res.status(200).json({ message: "sessions created" });
};

//delete sessions
export const destroy_session = async (req, res) => {
  if (req.session && req.session.user) {
    delete req.session.user;
  }
  res.status(200).json({ message: "sessions deleted" });
};

//this route is to add a new employee
const addEmployee = async (req, res) => {
  const { firstname, lastname, email, phoneNumber, address } = req.body;

  try {
    const currEmployee = await User.findOne({ email });

    if (currEmployee) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newEmployee = new Employee({
      firstname,
      lastname,
      email,
      phoneNumber,
      address,
    });
    await newEmployee.save().catch((err) => console.log(err));
    return res.status(201).json({ message: "employee created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  register,
  login,
  create_session,
  destroy_session,
  addEmployee,
};
