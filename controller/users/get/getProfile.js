import { getUserById } from "../../../manager/user/get/getUserById.js";
const getProfile = async (req, res) => {
  res.json(await req.user);
};
export { getProfile };
