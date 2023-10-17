import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";
import { timeStamp } from "console";
import { number } from "zod";


const clientBMS = new PrismaClientBMS();

interface deviceLogType  {
  changed_value: string;
  issued_date: bigint;
}


const getDeviceLog = async function (req: Request, res: Response, next: NextFunction) {
    try {
      console.log("getDeviceLog",req.params.deviceId, req.params.timestamp);
      
      // timeStamp 
      // get date from timestamp
      // get time from timestamp
      
      const date = new Date(req.params.timestamp);
      const database = `point_history_230901`

      // const dbres = await clientBMS[database].findFirst({
      //   where: {
      //     issued_date: req.body.deviceId,
      //     path_id: req.body.timestamp
      //   },
      // });

      const result = await clientBMS.$queryRaw<deviceLogType []>
      `SELECT changed_value, issued_date FROM public.point_history_230901 WHERE path_id = ${Number(req.params.deviceId)}`
      // const result = await clientBMS.$queryRaw<deviceLogType []>
      // `SELECT changed_value, issued_date FROM public.point_history_230901 WHERE path_id = 64435`

      const logResult = {}
        
      for (const item of result ) {
        const key = Number(item.issued_date);
        logResult[key] = item.changed_value;
      }

      req.deviceLog = logResult;
  
      next();
    } catch (error) {
      next(error);
    }
  };

export {getDeviceLog}