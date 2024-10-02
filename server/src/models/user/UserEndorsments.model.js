import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userEndorsmentsSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    endorserId: {
      type: refID,
      ref: "User",
      required: true,
    },
    endorsementDate: Date,
    description: String,
    skill: {
      type: refID,
      ref: "Skill",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserEndorsments = model("UserEndorsments", userEndorsmentsSchema);
export default UserEndorsments;
