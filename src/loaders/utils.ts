import { Application } from "express";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { COOKIE_SECRET, SERVER_CORS } from "../env.js";

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
      origin: SERVER_CORS,
    })
  );


  app.use(helmet());
  app.use(morgan("dev"));
};

export { utilsLoader };
