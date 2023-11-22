import { Application } from "express";

import authRouter from "../routers/auth.router.js";
import indexRouter from "../routers/index.router.js";
import deviceRouter from "../routers/device.router.js";

const routersLoader = function (app: Application): void {
  app.use("/", indexRouter);
  app.use("/auth", authRouter);
  app.use("/device", deviceRouter); 
};

export { routersLoader };
