import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientFac } from "../../prisma/src/generated/clientFac";

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

const readSettings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const select = {};
    const set = await prismaFac.general.findUnique({
      where: { type: "settings" },
    });

    select.settings = set.value;

    const device = await prismaFac.general.findUnique({
      where: { type: "deviceList" },
    });
    select.deviceList = device.value;

    const device11 = await prismaFac.general.findUnique({
      where: { type: "deviceList11" },
    });
    select.deviceList11 = device11.value;


    const device12 = await prismaFac.general.findUnique({
      where: { type: "deviceList12" },
    });
    select.deviceList12 = device12.value;


    const device21 = await prismaFac.general.findUnique({
      where: { type: "deviceList21" },
    });
    select.deviceList21 = device21.value;


    const device22 = await prismaFac.general.findUnique({
      where: { type: "deviceList22" },
    });
    select.deviceList22 = device22.value;
    
    req.settings = select;

    next();
  } catch (error) {
    next(error);
  }
};

const createSettings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    await prismaFac.general.create({
      data: req.body,
    });
    next();
  } catch (error) {
    next();
  }
};

const updateSettingsColRow = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const updated = await prismaFac.general.update({
      where: { type: "settings" },
      data: { value: { row: req.body.row, column: req.body.column } },
    });

    console.log("updateSettings", updated);

    next();
  } catch (error) {
    next(error);
  }
};

const updateSettingsDeviceList = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("updateSettingsDeviceList", req.body);

    await prismaFac.general.update({
      where: { type: req.body.tab },
      data: { value: req.body.deviceList },
    });

    next();
  } catch (error) {
    next(error);
  }
};

const deleteSettings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const settings = await prismaFac.general.deleteMany();

    console.log("deleteSettings", settings);

    next();
  } catch (error) {
    next(error);
  }
};

export {
  resetDeviceDB,
  readDeviceDB,
  readSettings,
  createSettings,
  updateSettingsColRow,
  updateSettingsDeviceList,
  deleteSettings,
};
