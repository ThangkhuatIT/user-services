import { model, Schema, Types } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  thumbnail?: {
    fileId: string;
    url: string;
  };
  role: string;
  headline?: string;
  description: string;
  websiteUrl?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
  linkedInUrl?: string;
  enrolledCoursesVisible?: boolean;
  isPublic: boolean;
  courseTags: string[];
  locked: boolean;
}

const userSchema = new Schema<IUser>(
  {
    _id: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["STUDENT", "ADMIN", "INSTRUCTOR"],
      default: "STUDENT",
    },
    thumbnail: {
      type: {
        fileId: String,
        url: String,
      },
      default: {},
    },
    headline: {
      type: String,
      default: " ",
    },
    description: {
      type: String,
      default: "",
    },
    websiteUrl: {
      type: String,
      default: "",
    },
    youtubeUrl: {
      type: String,
      default: "",
    },
    facebookUrl: {
      type: String,
      default: "",
    },
    linkedInUrl: {
      type: String,
      default: "",
    },
    enrolledCoursesVisible: {
      type: Boolean,
      default: true,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    locked: {
      type: Boolean,
      default: false,
    },
    courseTags: {
      type: [String],
      default: [],
    },
  },
  {
    _id: false,
    timestamps: true,
    toObject: {
      transform(doc, ret, options) {
        ret.id = ret._id;

        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const User = model("User", userSchema);

export default User;
