import mongoose from "mongoose";
import { refID } from "../types.js";

const serverSchema = new mongoose.Schema({
  name: String,
  description: String,
  logo: String,
  website: String,
  server_type: {
    type: String,
    enum: ["private", "public"],
    required: [true, "{VALUE} is not a valid server type."],
  },
});
