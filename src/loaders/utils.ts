import { Application } from "express";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { COOKIE_SECRET } from "../env.js";

const utilsLoader = function (app: Application): void {
  app.use(
    session({
      secret: COOKIE_SECRET as string,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(
    cors({
      origin: ["http://localhost:3000", "http://isinthesky.iptime.org:3000"],
    })
  );

  app.use(helmet());
  app.use(morgan("dev"));
};

export { utilsLoader };
