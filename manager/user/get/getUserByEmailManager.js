import User from "../../../models/User.js";

const getUserByEmailManager = async (user) => {
  try {
    return await User.findOne({ email: user });
  } catch (error) {
    return error;
  }
};
export { getUserByEmailManager };
