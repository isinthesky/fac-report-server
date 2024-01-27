import { Request, Response, NextFunction } from "express";
import { PrismaClient } from '../../prisma/src/generated/clientFac';

const prismaFac = new PrismaClient();

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
      req.unitGroup = await prismaFac.general.findUnique({
        where: { type: "unitGroup" },
      });

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
