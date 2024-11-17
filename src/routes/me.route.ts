import { Router } from "express";
import * as meController from "../controllers/me.controller";
import wrapCallbacksInTryCatch from "../utils/wrapCallbacksInTryCatch";
import {
  checkValidationResult,
  validateUpdateProfile,
} from "../middlewares/validations.middleware";
import checkJwt from "../middlewares/check-jwt.middleware";

const meRoute = Router();
meRoute.patch(
  "/",
  checkJwt,
  validateUpdateProfile,
  checkValidationResult,
  wrapCallbacksInTryCatch(meController.handleUpdateUserProfile)
);
meRoute.get(
  "/",
  checkJwt,
  wrapCallbacksInTryCatch(meController.handleGetUser)
);

export default meRoute;
