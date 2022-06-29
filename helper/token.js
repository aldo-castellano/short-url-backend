import jwt from "jsonwebtoken";
export const token = () => {
  return jwt.sign(`${Date.now}`, process.env.JWT_SECRET);
};
