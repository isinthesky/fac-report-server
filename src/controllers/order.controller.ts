import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const gets = async function (req: Request, res: Response, next: NextFunction) {
  try {
    next();
  } catch (error) {
    next(error);
  }
};

export { gets };
