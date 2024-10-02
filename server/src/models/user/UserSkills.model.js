import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userSkillsSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    skillId: {
      type: refID,
      ref: "Skill",
      required: true,
    },
    endorsementCount: Number,
    endorsements: {
      type: [
        {
          type: refID,
          ref: "Endorsement",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const UserSkills = model("UserSkills", userSkillsSchema);
export default UserSkills;
