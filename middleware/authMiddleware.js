import jwt from "jsonwebtoken";
import { getUserById } from "../manager/user/get/getUserById.js";

const checkAuth = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.toLowerCase().startsWith("bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, "contraseña");
      req.user = getUserById(decode.id);
      return next();
    } catch (error) {
      const e = new Error("token no valido");
      res.status(403).json({ msg: e.message });
    }
  }
  if (!token) {
    const error = new Error("token no valido o inexistente");
    return res.status(403).json({ msg: error.message });
  }

  next();
};
export { checkAuth };
