import { getUserByEmailManager } from "../../../manager/user/get/getUserByEmailManager.js";
import jwt from "jsonwebtoken";

const autenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmailManager(email);

    if (!user) {
      const error = new Error("ususario no encontrado");
      return res.status(400).json({ msg: error.message });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    if (await user.validatePassword(password)) {
      return res.json({ token: token });
    } else {
      return res.status(400).json({ msg: "usuario o contraseña incorrecto" });
    }
  } catch (error) {
    error;
  }
};
export { autenticateUser };
