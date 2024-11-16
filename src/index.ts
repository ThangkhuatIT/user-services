import express, { Express } from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database";
import Config from "./config";
import errorHandlingMiddleware from "./middlewares/error-handler.middleware";
import route from "./routes/";

const app: Express = express();

// Connect to MongoDB
const mongoURI = Config.MONGO_URI;
connectDB(mongoURI);

const port = Config.PORT || 3002;

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);

app.use(errorHandlingMiddleware);

app.listen(port, () => {
  console.log(` USerService is running on port ${port}`);
});