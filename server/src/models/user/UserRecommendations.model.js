import { model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const userRecommendationsSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    description: String,
    recommenderId: {
      type: refID,
      ref: "User",
      required: true,
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

const UserRecommendations = model(
  "UserRecommendations",
  userRecommendationsSchema
);
export default UserRecommendations;
