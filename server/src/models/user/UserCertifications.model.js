import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userCertificationsSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    certId: {
      type: refID,
      ref: "Certification",
      required: true,
    },
    issueDate: { type: Date, default: Date.now },
    expirationDate: { type: Date },
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

const UserCertifications = model(
  "UserCertifications",
  userCertificationsSchema
);
export default UserCertifications;
