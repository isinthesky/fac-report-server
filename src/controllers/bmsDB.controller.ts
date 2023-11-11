import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";

const clientBMS = new PrismaClientBMS();

const getDeviceLog = async function (req: Request, res: Response, next: NextFunction) {
    try {
      console.log("getDeviceLog",req.params.deviceId, req.params.timestamp);

      const date = new Date(Number(req.params.timestamp));
      const dbTable = `point_history_${String(date.getFullYear()).slice(-2)}${String(date.getMonth()+1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
      const query = `SELECT changed_value, issued_date FROM ${dbTable} WHERE path_id = ${Number(req.params.deviceId)};`;
      const result = await clientBMS.$queryRawUnsafe(query);

      const logResult = {}

      for (const item of result ) {
        const key = Number(item.issued_date);
        logResult[key] = item.changed_value;
      }

      req.deviceLog = logResult;
  
      next();
    } catch (error) {
      console.error("ERR:", error);
      next(error);
    }
  };

export {getDeviceLog}