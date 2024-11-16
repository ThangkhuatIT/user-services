import { Types } from "mongoose";
import User, { IUser } from "../models/User";
import ApiError from "../utils/ApiError";

interface UpdateProfileRequest {
  phoneNumber?: string;
  email?: string;
  name?: string;
}

export async function createUser({
  id,
  email,
  name,
  phoneNumber,
}: {
  id: string;
  email: string;
  name: string;
  phoneNumber?: string;
}): Promise<IUser> {
  try {
    let user = new User({
      _id: id,
      email,
      name,
      phoneNumber,
    });

    user = await user.save();

    return user.toObject();
  } catch (error: any) {
    throw new ApiError(500, error.message);
  }
}
export async function updateUserProfile(
  id: string,
  payload: UpdateProfileRequest
): Promise<IUser> {
  let user = await User.findOne({ _id: id });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  try {
    if (payload.email) user.email = payload.email;
    if (payload.phoneNumber) user.phoneNumber = payload.phoneNumber;
    if (payload.name) user.name = payload.name;

    user = await user.save();

    return user.toObject();
  } catch (error) {
    throw new ApiError(500, error.message);
  }
}

export async function getUsers(): Promise<IUser[]> {
  const users = User.find();

  return users;
}

export async function lockUser(id: Types.ObjectId) {
  let user = await User.findOne({ _id: id });

  if (!user) {
    throw new ApiError(404, "user not found");
  }

  await user.save();
}
