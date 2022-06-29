import User from "../../../models/User.js";

const getUserById = async (id) => {
  try {
    const user = await User.findById(id).select("-password");

    return user;
  } catch (error) {
    return error;
  }
};
export { getUserById };
