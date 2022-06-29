import mongoose from "mongoose";

const webSchema = mongoose.Schema({
  original_url: {
    type: String,
    requised: true,
    trim: true,
  },
  short_path_url: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Web = mongoose.model("Web", webSchema);
export default Web;
