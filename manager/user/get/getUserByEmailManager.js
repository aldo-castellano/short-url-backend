import User from "../../../models/User.js";

const getUserByEmailManager = async (user) => {
  try {
    return await User.findOne({ email: user });
  } catch (error) {
    console.log(error);
  }
};
export { getUserByEmailManager };
