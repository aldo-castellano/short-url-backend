import { updateUserManager } from "../../../manager/user/post/updateUserManager.js";
const getConfirm = async (req, res) => {
  const user = req.user;
  user.confirm = true;

  try {
    const updateUser = await updateUserManager(user);
    console.log(updateUser);
    res.send(user);
  } catch (error) {
    error;
  }
};
export { getConfirm };
