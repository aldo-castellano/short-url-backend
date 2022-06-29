import { getUserByEmailManager } from "../../../manager/user/get/getUserByEmailManager.js";
import jwt from "jsonwebtoken";

export const requestPassword = async (req, res) => {
  try {
    const checkEmail = await getUserByEmailManager(req.body.email);
    if (!checkEmail) {
      const error = new Error("ususario no encontrado");
      return res.status(400).json({ msg: error.message });
    }

    const token = jwt.sign({ id: checkEmail.id }, process.env.JWT_SECRET);
    res.status(200).json({ token: token });
  } catch (error) {
    error;
  }
};
