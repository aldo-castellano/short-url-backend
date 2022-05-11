import Web from "../../../models/Web.js";

const postWebManager = async (body) => {
  try {
    const web = new Web(body);
    const post = await web.save();

    return post;
  } catch (error) {
    return error;
  }
};

export { postWebManager };
