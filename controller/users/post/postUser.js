import { postUserManager } from "../../../manager/user/post/postUserManager.js";
import { getUserByEmailManager } from "../../../manager/user/get/getUserByEmailManager.js";
import jwt from "jsonwebtoken";

const postUser = async (req, res) => {
  console.log(req);
  try {
    const user = await getUserByEmailManager(req.body.email);
    if (user) {
      const error = new Error("ususario ya registrado");
      res.status(400).json({ msg: error.message });
    }

    const post = await postUserManager(req.body);
    const token = jwt.sign({ id: post.id }, process.env.JWT_SECRET);

    res.send({
      name: post.name,
      token: token,
    });
  } catch (error) {
    error;
  }
};

export { postUser };
