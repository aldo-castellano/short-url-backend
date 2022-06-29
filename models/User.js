import mongoose from "mongoose";
import bcrypt from "bcrypt";
// import { token } from "../helper/token.js";
// import jwt from "jsonwebtoken";
// const token = () => {
//   return jwt.sign(`${Date.now}`, process.env.JWT_SECRET);
// };
const userSchema = mongoose.Schema({
  name: {
    type: String,
    requised: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // confirm_token: {
  //   type: String,
  //   default: token,
  // },
  confirm: {
    type: Boolean,
    default: false,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema);
export default User;
