import mongoose from "mongoose";
import { refID } from "../types.js";

// DATABASE SHEMAS
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, "Username is required field."],
      index: true,
    },
    email: {
      type: String,
      unique: true,
      index: true,
      required: [true, "Email is required field."],
      match: [
        /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i,
        "Email is invalid.",
      ],
    },
    password: { type: String, required: [true, "Password is required field."] },
    first_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, "First name is invalid."],
    },
    last_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, "Last name is invalid."],
    },
    profile_picture: String,
    banner_picture: String,
    bio: String,
    location: String,
    userType: {
      type: String,
      enum: [
        "individual",
        "company_representative",
        "institute_representative",
      ],
      required: [true, "{VALUE} is not a valid user type."],
    },
    role: {
      type: String,
      enum: [
        "admin",
        "user",
        "moderator",
        "recruiter",
        "employee",
        "content_creator",
        "content_moderator",
      ],
      required: [true, "{VALUE} is not a valid user role."],
    },
  },
  {
    timestamps: true,
  }
);

const userProfileSchema = new mongoose.Schema({
  user_id: {
    type: refID,
    ref: "User",
    required: true,
  },
  headline: String,
  summary: String,
  website: String,
  github_url: String,
  linkedin_url: String,
  twitter_url: String,
  job_status: String,
});

const userCertificationsSchema = new mongoose.Schema({
  user_id: {
    type: refID,
    ref: "User",
    required: true,
  },
  cert_id: {
    type: refID,
    ref: "Certification",
    required: true,
  },
  issue_date: { type: Date, default: Date.now },
  expiration_date: { type: Date },
});

const certificationSchema = new mongoose.Schema({
  institution_id: {
    type: refID,
    ref: "Institution",
    required: true,
  },
  name: String,
  description: String,
  validity_period: Number,
});

// DATABASE MODELS
const User = mongoose.model("User", userSchema);
const UserProfile = mongoose.model("UserProfile", userProfileSchema);
const UserCertifications = mongoose.model(
  "UserCertifications",
  userCertificationsSchema
);
const Certification = mongoose.model("Certification", certificationSchema);

export { user, userProfile, userCertifications, Certification };
