import { getWebManager } from "../../../manager/web/get/getWebManager.js";
const getOriginalUrl = async (req, res) => {
  try {
    const web = await getWebManager(req.params.path);

    if (!web) {
      const error = new Error("url no existe");
      return res.status(400).json({ msg: error.message });
    }
    return res.json(web.original_url);
  } catch (error) {
    console.log(error);
  }
};

export { getOriginalUrl };
