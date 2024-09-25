import mongoose from "mongoose";

// DATABASE SHEMAS
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  first_name: String,
  last_name: String,
  profile_picture: String,
  bio: String,
  location: String,
  userType: {
    type: String,
    enum: ["individual", "company_representative", "institute_representative"],
    required: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

const userProfileSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  headline: String,
  summary: String,
  website: String,
  github_url: String,
  linkedin_url: String,
  twitter_url: String,
});

const userCertificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  issue_date: Date,
  expiration_date: Date,
});

// DATABASE MODELS
const user = mongoose.model("User", userSchema);
const userProfile = mongoose.model("UserProfile", userProfileSchema);
const userCertifications = mongoose.model(
  "UserCertificates",
  userCertificationSchema
);

export { user, userProfile, userCertifications };
