import User from "../../../models/User.js";

const postUserManager = async (body) => {
  try {
    const user = new User(body);
    const post = await user.save();

    return post;
  } catch (error) {
    return error;
  }
};

export { postUserManager };
