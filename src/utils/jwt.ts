import fs from "fs";
import jwt from "jsonwebtoken";

export function verifyJwt(token: string) {
  const cert = fs.readFileSync('public.key');

  const payload = jwt.verify(token, cert, { algorithms: ['RS256'] });
    
  return payload;
}
