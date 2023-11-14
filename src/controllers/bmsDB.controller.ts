import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";
import { BMS_TABLE_NAME, BMS_SELECT_QUERY } from "../static/consts.js";

const clientBMS = new PrismaClientBMS();

const getDeviceLog = async function (req: Request, res: Response, next: NextFunction) {
    try {
      const date = new Date(Number(req.params.timestamp));
      const formattedDate = `${date.getFullYear().toString().slice(-2)}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
      const dbTable = `${BMS_TABLE_NAME}${formattedDate}`;

      const query = `${BMS_SELECT_QUERY} ${dbTable} WHERE path_id = ${Number(req.params.deviceId)}`;
      const result = await clientBMS.$queryRawUnsafe(query);

      const logResult: Record<number, string> = {};

      for (const item of result) {
        const key = Number(item.issued_date);
        logResult[key] = item.changed_value;
      }
  
      req.deviceLog = logResult;
  
      next();
    } catch (error) {
      console.error("Database query error:", error);
      next(error);
    }
  };

export {getDeviceLog}