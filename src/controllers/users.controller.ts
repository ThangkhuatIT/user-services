import { Response, Request } from "express";
import { createUser } from "../services";
import { getUsers } from "../services/user.service";

export async function handleCreateUser(
  req: Request,
  res: Response,
) {
  const { email, name, phoneNumber, id } = req.body;

  const result = await createUser({
    id,
    email,
    name,
    phoneNumber,
  });

  res.status(201).send(result);
}

export async function handleGetUsers(req:Request, res:Response) {
  const users =  await getUsers()
  res.status(200).send(users)
}
export async function handleLockUser(req:Request, res:Response) {
  
}