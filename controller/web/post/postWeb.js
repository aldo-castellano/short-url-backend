import { postWebManager } from "../../../manager/web/post/postWebManager.js";
import validator from "validator";
const postWeb = async (req, res) => {
  try {
    let data;
    const option = { require_protocol: true };

    if (
      validator.isURL(req.body.original_url, option) === true &&
      validator.isURL(req.body.original_url) === true
    ) {
      data = await postWebManager(req.body);
    } else if (
      validator.isURL(req.body.original_url, option) === true ||
      validator.isURL(req.body.original_url) === true
    ) {
      req.body.original_url = `https://${req.body.original_url}`;

      data = await postWebManager(req.body);
    }
    if (!req.body.original_url) {
      const error = new Error("url invalida");
      res.status(400).json({ msg: error.message });
    }

    return res.json(data);
  } catch (error) {
    error;
  }
};

export { postWeb };
