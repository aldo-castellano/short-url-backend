import User from "../../../models/User.js";

const getUserById = async (id) => {
  try {
    const user = await User.findById(id).select("-password -confirm");

    return user;
  } catch (error) {
    return error;
  }
};
export { getUserById };
