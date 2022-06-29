import Web from "../../../models/Web.js";
import shortid from "shortid";
let generator = shortid.generate();
console.log(generator);
const postWebManager = async (body) => {
  try {
    const { original_url } = body;
    console.log(generator, "fdjksahjfkhdkafhsjkdfhksdfhklsdjhfk");
    const data = {
      original_url: original_url,
      short_path_url: `${shortid.generate()}${Math.floor(Math.random() * 10)}`,
      // user: user,
    };
    console.log("hola", data);
    const web = new Web(data);
    const post = await web.save();

    return post;
  } catch (error) {
    return error;
  }
};

export { postWebManager };
