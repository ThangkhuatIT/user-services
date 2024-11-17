import { Request, NextFunction, Response } from "express";
import { getUserbyAdmin, getUserProfile, lockUser } from "../services/user.service";

export async function handleGetUserProfile(req: Request, res: Response) {
  const id = req.params.id;
  const user = await getUserProfile(id);
  return res.status(200).json(user);
}
export async function handleGetUserByAdmin(req: Request, res: Response) {
  const id = req.params.id;
  const user = await getUserbyAdmin(id);
  return res.status(200).json(user);
}
export async function handleLockUser(req: Request, res: Response) {
  const id = req.params.id;
  const user = await lockUser(id,req.body.locked);
  return res.status(200).send(user);
}
