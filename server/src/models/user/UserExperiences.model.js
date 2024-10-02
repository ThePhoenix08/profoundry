import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userExperiencesSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    companyId: {
      type: refID,
      ref: "Company",
      required: true,
    },
    title: String,
    location: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String,
  },
  {
    timestamps: true,
  }
);

const UserExperiences = model("UserExperiences", userExperiencesSchema);
export default UserExperiences;
