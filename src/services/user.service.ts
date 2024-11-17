import { Types } from "mongoose";
import User, { IUser } from "../models/User";
import ApiError from "../utils/ApiError";
import { UpdateUserDto } from "../dtos/UpdateUserDto";
import { verifyJwt } from "../utils/jwt";
export async function updateUserProfile(
  id: string,
  payload: UpdateUserDto
): Promise<IUser> {
  let user = (await User.findOne({ _id: id })) as any;

  if (!user) {
    throw new ApiError(404, "User not found");
  }
  if (payload.thumbnailToken) {
    const data = verifyJwt(payload.thumbnailToken) as any;
    const { userId, fileId, url } = data;
    if (id !== userId) throw new ApiError(403, "Forbidden");
    user.thumbnail = { fileId: fileId, url: url };
  }
  Object.entries(payload).forEach(([key, value]) => {
    if (value) {
      user[key] = payload[key as keyof UpdateUserDto];
    }
  });

  user = await user.save();

  return user.toObject();
}

export async function getUser(id: string): Promise<IUser | null> {
  const user = User.findOne({ _id: id });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return user;
}
export async function getUserbyAdmin(id: string): Promise<IUser | null> {
  const user = User.findOne({ _id: id });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return user;
}
export async function getUserProfile(id: string): Promise<IUser | null> {
  const user = User.findOne({ _id: id }) as any;
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  if (user.isPublic === true) throw new ApiError(403, "Forbidden");
  return user;
}

export async function lockUser(id: string, locked:boolean) {

  let user = await User.findOne({ _id: id });

  if (!user) {
    throw new ApiError(404, "user not found");
  }
  user.locked = locked
  await user.save();
}
