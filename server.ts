import express, { Application, RequestHandler } from "express";
import cors from "cors";
import promBundle from "express-prom-bundle";
import bp from "body-parser";
import ratesRoutes from "./src/routes/RatesRoutes";

const app: Application = express();
const port: number = 8000;

const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://dede:dedeen2a@carrierrates.m3qxn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const metricsMiddleware: RequestHandler = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

app.use(cors());
app.use(bp.json());

app.use(ratesRoutes);

app
  .listen(port, (): void => {
    console.log("Restapi listening on " + port);
  })
  .on("error", (error: Error) => {
    console.error("Error occured: " + error.message);
  });

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err: Error) => {
    console.error(err);
  });
