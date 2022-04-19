import User from "../../models/Users.js";

const postUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const post = await user.save();
    res.json({ msg: "usuario registrado" });
  } catch (error) {
    console.log(error);
  }

  //   const result = req.body;
};
export { postUser };
