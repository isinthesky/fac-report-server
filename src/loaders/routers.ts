import { Application } from "express";

import authRouter from "../routers/auth.router.js";
import indexRouter from "../routers/index.router.js";

const routersLoader = function (app: Application): void {
  app.use("/", indexRouter);
  app.use("/auth", authRouter);
};

export { routersLoader };
