import { Request, Response, NextFunction } from "express";

import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";
import { PrismaClient as PrismaClientFac } from "../../prisma/src/generated/clientFac";

const prismaBMS = new PrismaClientBMS({
  log: ["query", "info", "warn", "error"],
});

const prismaFac = new PrismaClientFac({
  log: ["query", "info", "warn", "error"],
});

import { TEST_A_Table, TEST_B_Table } from "../env.js";

const getDateLog = async function (req: Request, res: Response, next: NextFunction) {
  try {
    console.log("connect", await prismaBMS.$connect());

    const Data = await prismaBMS.$queryRaw`SELECT count(*) FROM ${TEST_B_Table}`;

    console.log("bms query: ", Data);

    await prismaBMS.$disconnect();

    console.log("connect", await prismaFac.$connect());

    const Data2 = await prismaFac.$queryRaw`SELECT count(*) FROM "test01"`;

    console.log("fac query: ", Data2);

    await prismaFac.$disconnect();

    next();
  } catch (error) {
    next(error);
  }
};

// const getDateLog = async function (req: Request, res: Response, next: NextFunction) {
//   try {
//     await prisma.$connect();
//     const a_Data = await prisma.$queryRaw`SELECT * FROM ${TEST_A_Table}
//     WHERE issued_date BETWEEN 1691096439382 AND 1691100035214 limit 1;`;

//     const deviceData = await prisma.$queryRaw`SELECT * FROM ${TEST_B_Table}
//     WHERE path_id = ${a_Data[0].path_id};`;

//     await prisma.$disconnect();

//     req.device = deviceData;

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

export { getDateLog };
