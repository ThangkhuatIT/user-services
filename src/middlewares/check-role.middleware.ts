import { NextFunction, Response, Request } from "express";

export default function checkRole(...roles: string[]) {
    return (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        const user = req.user;

        if (!user) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }

        const role = user.role;

        if (!roles.includes(role)) {
            return res.status(401).send({
                message: "Unauthorized!"
            }); 
        }

        next();          
      }
};