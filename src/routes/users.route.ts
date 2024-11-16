import { Router } from "express";
import * as userController from "../controllers/users.controller";
import wrapCallbacksInTryCatch from "../utils/wrapCallbacksInTryCatch";
import checkRole from "../middlewares/check-role.middleware";
import checkJwt from "../middlewares/check-jwt.middleware";

const userRoute = Router();
userRoute.post(
    "/",
    wrapCallbacksInTryCatch(userController.handleCreateUser)
);
userRoute.get(
    "/",
    checkJwt,
    checkRole('Admin'),
    wrapCallbacksInTryCatch(userController.handleGetUsers)
);
export default userRoute;