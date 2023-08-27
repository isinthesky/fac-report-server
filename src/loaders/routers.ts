import { Application, ErrorRequestHandler, NextFunction } from "express";
import { Request, Response } from "express"; // 추가

import authRouter from "../routers/auth.router.js";
import indexRouter from "../routers/index.router.js";

const routersLoader = function (app: Application): void {
  app.use("/", indexRouter);
  app.use("/auth", authRouter);

  app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    // res.locals.message = err;
    // res.locals.error = req.app.get("env") === "development" ? err : {};

    console.log("ERR: ", err);

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(500);
    res.render("error", { error: err });

    // return res.status(500).json({ ok: false });
  });
};

export { routersLoader };
