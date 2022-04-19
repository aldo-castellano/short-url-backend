import mongoose from "mongoose";

const urlSchema = mongoosse.Schema({
  url: {
    type: String,
    required: true,
    trim: true,
  },
});
