import Web from "../../../models/Web.js";
const getWebManager = async (pathName) => {
  try {
    return await Web.findOne({ short_path_url: pathName });
  } catch (error) {
    return error;
  }
};
export { getWebManager };
