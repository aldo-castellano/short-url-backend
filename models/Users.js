import mongoose from "mongoose";

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
  token: {
    type: String,
  },
  confirm: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
