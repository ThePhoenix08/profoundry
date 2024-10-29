import { model, Schema } from "mongoose";
import {
  alphabetOnlyRegex,
  validPhoneNumberRegex,
  validURLRegex,
} from "../../validators/Regex.validator.js";
import { refID } from "../../types/types.js";

// USER Schema
const userSchema = new Schema(
  {
    credentials: {
      type: refID,
      ref: "User",
      required: [true, "Credentials is required field."],
    },
    personal_details: {
      type: Object,
      required: [true, "Personal details is required field."],
      properties: {
        firstName: {
          type: String,
          match: [alphabetOnlyRegex, "First name: {VALUE} is invalid."],
        },
        middleName: {
          type: String,
          match: [alphabetOnlyRegex, "Middle name: {VALUE} is invalid."],
        },
        lastName: {
          type: String,
          match: [alphabetOnlyRegex, "Last name: {VALUE} is invalid."],
        },
        gender: {
          type: String,
          enum: ["male", "female", "other"],
          required: [true, "{VALUE} is not a valid gender."],
        },
        age: {
          type: Number,
          required: [true, "Age is required field."],
        },
        dateOfBirth: {
          type: Date,
          required: [true, "Date of birth is required field."],
        },
        address: {
          type: String,
          required: [true, "Address is required field."],
        },
        phone_number: {
          type: String,
          required: [true, "Phone number is required field."],
          match: [validPhoneNumberRegex, "Phone number: {VALUE} is invalid."],
        },
      },
    },
    assets: {
      type: Object,
      required: [true, "Assets is required field."],
      properties: {
        profile_picture: {
          type: String,
          match: [validURLRegex, "Profile picture url: {VALUE} is invalid."],
        },
        banner_picture: {
          type: String,
          match: [validURLRegex, "Banner picture url: {VALUE} is invalid."],
        },
        cover_picture: {
          type: String,
          match: [validURLRegex, "Cover picture url: {VALUE} is invalid."],
        },
      },
    },
    socialMedia: {
      type: Object,
      required: [true, "Social media is required field."],
      properties: {
        website: {
          type: String,
          match: [validURLRegex, "Website url: {VALUE} is invalid."],
        },
        github: {
          type: String,
          match: [validURLRegex, "Github url: {VALUE} is invalid."],
        },
        linkedin: {
          type: String,
          match: [validURLRegex, "Linkedin url: {VALUE} is invalid."],
        },
        twitter: {
          type: String,
          match: [validURLRegex, "Twitter url: {VALUE} is invalid."],
        },
      },
    },
    profileData: {
      type: Object,
      required: [true, "Profile data is required field."],
      properties: {
        bio: String,
        location: String,
        headline: String,
        summary: String,
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
        job_status: {
          type: String,
          enum: ["employed", "open_to_job", "not_interested", "recruiting"],
          required: [true, "{VALUE} is not a valid job status."],
        },
      },
    },
    profileSections: {
      type: Object,
      properties: {
        certifications: { type: [{ type: refID, ref: "UserCertifications" }] },
        education: { type: [{ type: refID, ref: "UserEducation" }] },
        skills: { type: [{ type: refID, ref: "UserSkills" }] },
        experiences: { type: [{ type: refID, ref: "UserExperiences" }] },
        courses: { type: [{ type: refID, ref: "UserCourses" }] },
        recommendations: {
          type: [{ type: refID, ref: "UserRecommendations" }],
        },
        endorsements: { type: [{ type: refID, ref: "UserEndorsements" }] },
        connections: { type: [{ type: refID, ref: "Connection" }] },
        projects: { type: [{ type: refID, ref: "Project" }] },
        interests: { type: [{ type: refID, ref: "Interest" }] },
        groups: { type: [{ type: refID, ref: "Server" }] },
      },
    },
    settings: { type: refID, ref: "UserSettings" },
  },
  {
    timestamps: true,
  }
);

const UserProfile = model("UserProfile", userSchema);
export default UserProfile;
