import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userEducationSchema = new Schema(
  {
    user_id: {
      type: refID,
      ref: "User",
      required: true,
    },
    institution_id: {
      type: refID,
      ref: "Institution",
      required: true,
    },
    degreeName: String,
    fieldOfStudy: String,
    graduationDate: Date,
    startDate: Date,
    endDate: Date,
    description: String,
    skills: {
      type: [
        {
          type: refID,
          ref: "Skill",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const UserEducation = model("UserEducation", userEducationSchema);
export default UserEducation;
