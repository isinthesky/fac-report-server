import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientFac } from "../../prisma/src/generated/clientFac";
import { Device, Division, Station } from "../../prisma/src/generated/clientFac/index.js";

const prismaFac = new PrismaClientFac();

const resetDeviceDB = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const dbStations = req.xmlStations;
    const dbDivisions = await Promise.all(
      req.xmlDivisions.map((path) => {
        const item = path.split(",");
        return { station: item[0], name: item[1] };
      })
    );

    const dbDevices = req.xmlDevices;

    await prismaFac.Device.deleteMany({});
    await prismaFac.Division.deleteMany({});
    await prismaFac.Station.deleteMany({});

    await prismaFac.Station.createMany({
      data: await Promise.all(
        Array.from(dbStations).map((item) => {
          return { name: item };
        })
      ),
    });

    const dbStation = await prismaFac.Station.findMany({});

    const stationMap = new Map();
    for (const data of dbStation) {
      stationMap.set(data.name, data.id);
    }

    await prismaFac.Division.createMany({
      data: await Promise.all(
        Array.from(dbDivisions).map(async (item) => {
          return {
            stationId: stationMap.get(item.station),
            name: item.name,
          };
        })
      ),
    });

    const listDevice = [];

    for (const div of dbDevices) {
      for (const item of div) {
        const dbDiv = await prismaFac.Division.findFirst({
          where: {
            stationId: stationMap.get(item.stn),
            name: item.div,
          },
        });
        listDevice.push({
          stationId: stationMap.get(item.stn),
          divisionId: dbDiv.id,
          xmlId: item.xmlID,
          name: item.name,
        });
      }
    }

    await prismaFac.Device.createMany({
      data: listDevice,
    });

    next();
  } catch (error) {
    next(error);
  }
};

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

export { resetDeviceDB, readDeviceDB };
