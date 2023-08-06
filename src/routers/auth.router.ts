import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get("/login", (req: Request, res: Response, next: NextFunction): void => {
  res.render("login");
});

export { router as default };
