import { NextFunction, Response, Request } from "express";
import { verifyJwt } from "../utils/jwt";

export default function checkJwt(
  req: Request,
  res: Response,
  next: NextFunction
) {
    const token = decodeTokenFromRequest(req);

    if (!token) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
    }

    try {
        const payload = verifyJwt(token) as any;

        req.user = payload;

        console.log(req.user);
        next();
    } catch (error) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
    }
};

function decodeTokenFromRequest(request: Request) {
    const values = request.headers["authorization"]?.split(" ");
    
    return values?.[1] ?? undefined;
}