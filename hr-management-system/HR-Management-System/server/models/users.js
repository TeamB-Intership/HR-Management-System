import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  country: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
