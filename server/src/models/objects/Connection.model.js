import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const connectionSchema = new Schema(
  {
    user1Id: {
      type: refID,
      ref: "User",
      required: true,
    },
    user2Id: {
      type: refID,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      required: [true, "{VALUE} is not a valid connection status."],
    },
  },
  {
    timestamps: true,
  }
);

const Connection = model("Connection", connectionSchema);
export default Connection;
