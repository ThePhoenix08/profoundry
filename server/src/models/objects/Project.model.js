import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const projectSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    companyId: {
      type: refID,
      ref: "Company",
    },
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ["pending", "completed", "ongoing"],
      required: [true, "{VALUE} is not a valid project status."],
    },
    members: {
      type: [
        {
          type: Object,
          properties: {
            userId: {
              type: refID,
              ref: "User",
            },
            role: {
              type: String,
              enum: ["owner", "member"],
              required: [true, "{VALUE} is not a valid project role."],
            },
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);
export default Project;
