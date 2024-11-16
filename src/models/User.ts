import { model, Schema, Types } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phoneNumber?: string;
};

const userSchema = new Schema<IUser>({
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
  phoneNumber: {
    type: String,
  },
}, {
  _id: false,
  timestamps: true,
  toObject: {
    transform(doc, ret, options) {
      ret.id = ret._id;

      delete ret._id;
      delete ret.__v;
    },
  }
});

const User = model("User", userSchema);

export default User;
