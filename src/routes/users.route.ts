import { Router } from "express";
import * as userController from "../controllers/users.controller";
import wrapCallbacksInTryCatch from "../utils/wrapCallbacksInTryCatch";
import checkRole from "../middlewares/check-role.middleware";
import checkJwt from "../middlewares/check-jwt.middleware";

const userRoute = Router();
userRoute.get(
  "/public-profile:id",
  wrapCallbacksInTryCatch(userController.handleGetUserProfile)
);
userRoute.patch(
  "/:id",
  checkJwt,
  checkRole("ADMIN"),
  wrapCallbacksInTryCatch(userController.handleGetUserProfile)
);
userRoute.get(
  "/:id",
  checkJwt,
  checkRole("ADMIN"),
  wrapCallbacksInTryCatch(userController.handleGetUserByAdmin)
);
export default userRoute;
