import { Response, Request } from "express";
import { getUser, updateUserProfile } from "../services/user.service";

/**
 * @openapi
 * /api/v1/users/me:
 *   patch:
 *     summary: Update user information
 *     responses:
 *       200:
 *         description: Returns updated user.
 */
export async function handleUpdateUserProfile(req: Request, res: Response) {
  const id = req.user.sub;
  const user = await updateUserProfile(id, req.body);

  return res.status(200).json(user);
}
export async function handleGetUser(req: Request, res: Response) {
  const id = req.user.sub;
  const user = await getUser(id);
  return res.status(200).json(user);
}
