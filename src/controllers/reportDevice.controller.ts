import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientFac } from "../../prisma/src/generated/clientFac/index.js";
import { CustomRequest } from "../static/interfaces.js";

const prismaFac = new PrismaClientFac();


const readDeviceDB = async function (req: Request, res: Response, next: NextFunction) {
    try {
      req.deviceSet = {
        station: await prismaFac.Station.findMany(),
        division: await prismaFac.Division.findMany(),
        device: await prismaFac.Device.findMany(),
      };
  
      next();
    } catch (error) {
      next(error);
    }
  };

const updateSettingsTabPage = async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // console.log("updateSettingsTabPage", req.body);
  
      await prismaFac.general.update({
        where: { type: req.body.name },
        data: { value: req.body.object },
      });
  
      next();
    } catch (error) {
      next(error);
    }
  };
  
  
  const updateUnitGroupList = async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // console.log("updateSettingsTabPage", req.body);
  
      await prismaFac.general.update({
        where: { type: "unitGroup" },
        data: { value: req.body.object },
      });
  
      next();
    } catch (error) {
      next(error);
    }
  };

  const getUnitGroupList = async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // console.log("getUnitGroupList", req.body);
  
      req.unitGroup = await prismaFac.general.findUnique({
        where: { type: "unitGroup" },
      });

      console.log("res getUnitGroupList", req.unitGroup);

      next();
    } catch (error) {
      next(error);
    }
  };
  


export {
    updateSettingsTabPage,
    updateUnitGroupList,
    getUnitGroupList,
    readDeviceDB
  };
  