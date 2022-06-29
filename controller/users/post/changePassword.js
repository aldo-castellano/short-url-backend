import { getUserByEmailManager } from "../../../manager/user/get/getUserByEmailManager.js";
export const changePassword = async (req, res) => {
  try {
    const user = await getUserByEmailManager(req.user.email);
    user.password = req.body.password;
    await user.save();
    res.status(200).json({ status: "password changed successfully" });
  } catch (error) {
    error;
  }
};
