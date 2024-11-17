import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import userRoute from "./users.route";
import meRoute from "./me.route";
import swaggerSpec from "../utils/swagger-spec";

const route = Router();

// route.get("/swagger/v1/swagger.json", (req.))
route.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

route.use("api/us/v1/users", userRoute);

route.use("api/us/v1/me", meRoute);

export default route;
