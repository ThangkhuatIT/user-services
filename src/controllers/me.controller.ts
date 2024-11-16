import { Response, Request } from "express";
import { updateUserProfile } from "../services/user.service";

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
  const { phoneNumber, email, name } = req.body;

  const user = await updateUserProfile(id, { phoneNumber, email, name });

  res.status(200).send(user);
}
