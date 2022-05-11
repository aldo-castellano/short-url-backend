import { postWebManager } from "../../../manager/web/post/postWebManager.js";
import validator from "validator";
const postWeb = async (req, res) => {
  try {
    let data;
    console.log(req.body);
    const option = { require_protocol: true };
    // console.log(validator.isURL(path, option));
    if (validator.isURL(req.body.original_url, option)) {
      data = await postWebManager(req.body);
    } else {
      req.body.original_url = `https://${req.body.original_url}`;
      console.log("dentro", req.body);
      data = await postWebManager(req.body);
    }

    return res.json(data);
  } catch (error) {
    error;
  }
};

export { postWeb };
