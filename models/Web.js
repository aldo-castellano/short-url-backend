import mongoose from "mongoose";
import shortid from "shortid";

const webSchema = mongoose.Schema({
  original_url: {
    type: String,
    requised: true,
    trim: true,
  },
  short_path_url: {
    type: String,
    default: shortid.generate,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Web = mongoose.model("Web", webSchema);
export default Web;
