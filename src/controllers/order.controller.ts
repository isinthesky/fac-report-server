import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

import { TEST_A_Table, TEST_B_Table } from "../env.js";

const getDateLog = async function (req: Request, res: Response, next: NextFunction) {
  try {
    await prisma.$connect();
    const a_Data = await prisma.$queryRaw`SELECT * FROM ${TEST_A_Table}
    WHERE issued_date BETWEEN 1691096439382 AND 1691100035214 limit 1;`;

    const deviceData = await prisma.$queryRaw`SELECT * FROM ${TEST_B_Table} 
    WHERE path_id = ${a_Data[0].path_id};`;

    await prisma.$disconnect();

    req.device = deviceData;

    next();
  } catch (error) {
    next(error);
  }
};

export { getDateLog };
