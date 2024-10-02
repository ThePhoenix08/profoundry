import { Aggregate, model, Schema } from "mongoose";
import { refID } from "../../types/types.js";

const visibilityEnum = [
  "private",
  "firstConnectionsOnly",
  "thirdConnectionsOnly",
  "public",
];

const userSettingsSchema = new Schema(
  {
    userId: {
      type: refID,
      ref: "User",
      required: true,
    },
    theme: String,
    language: String,
    timezone: String,
    notifications: {
      type: Object,
      properties: {
        email: Boolean,
        push: Boolean,
      },
    },
    visibility: {
      type: Object,
      properties: {
        profile: { type: String, enum: visibilityEnum, default: "public" },
        connections: { type: String, enum: visibilityEnum, default: "private" },
        interests: { type: String, enum: visibilityEnum, default: "public" },
        groups: {
          type: String,
          enum: visibilityEnum,
          default: "firstConnectionsOnly",
        },
        websiteURL: { type: String, enum: visibilityEnum, default: "public" },
        githubURL: { type: String, enum: visibilityEnum, default: "public" },
        linkedinURL: { type: String, enum: visibilityEnum, default: "public" },
        twitterURL: {
          type: String,
          enum: visibilityEnum,
          default: "thirdConnectionsOnly",
        },
        profilePicture: {
          type: String,
          enum: visibilityEnum,
          default: "public",
        },
        bannerPicture: {
          type: String,
          enum: visibilityEnum,
          default: "public",
        },
        coverPicture: {
          type: String,
          enum: visibilityEnum,
          default: "public",
        },
        middleName: { type: String, enum: visibilityEnum, default: "private" },
        gender: { type: String, enum: visibilityEnum, default: "public" },
        age: { type: String, enum: visibilityEnum, default: "private" },
        dateOfBirth: { type: String, enum: visibilityEnum, default: "private" },
        address: { type: String, enum: visibilityEnum, default: "private" },
        phoneNumber: { type: String, enum: visibilityEnum, default: "private" },
      },
    },
    isTwoFactorAuthenticationEnabled: Boolean,
  },
  {
    timestamps: true,
  }
);

const UserSettings = model("UserSettings", userSettingsSchema);
export default UserSettings;
