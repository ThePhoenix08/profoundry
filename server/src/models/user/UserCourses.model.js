import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userCoursesSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    courseId: {
      type: refID,
      ref: "Course",
      required: true,
    },
    startDate: Date,
    endDate: Date,
    description: String,
    isCertified: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
    },
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

const UserCourses = model("UserCourses", userCoursesSchema);
export default UserCourses;
