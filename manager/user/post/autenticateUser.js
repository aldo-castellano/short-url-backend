import User from "../../models/User.js";
import { getUserByEmailManager } from "./get/getUserByEmailManager.js";

const autenticateUser = async (email) => {
  try {
    getUserByEmailManager(email);
    const user = new User(body);
    const post = await user.save();

    return post;
  } catch (error) {
    return error;
  }
};
export { autenticateUser };
