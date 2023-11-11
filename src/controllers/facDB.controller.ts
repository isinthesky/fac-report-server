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

    const tab = await prismaFac.general.findUnique({
      where: { type: "tabSetting" },
    });

    select.tabSettings = tab.value;

    const approves = await prismaFac.general.findUnique({
      where: { type: "approves" },
    });

    select.approves = approves.value;

    for (let i = 1; i <= select.tabSettings.length; i += 1 ) {
      const key = `tabPageInfo${i}`;
      const set = await prismaFac.general.findUnique({
        where: { type: key },
      });

      console.log("readSettings", key, set)
      set.value["id"] = set.id;
      select[key] = set.value;
    }

    console.log("select", select);
    
    req.settings = select;

    next();
  } catch (error) {
    next(error);
  }
};

const createSettings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const key = await prismaFac.general.findFirst({where: {type: req.body.type}})
    console.log("create setting", key)

    if (key) {
      console.log("update", req.body)
      await prismaFac.general.update({
        where: { type: req.body.type },
        data: { value: req.body.value },
      });
    }
    else {
      console.log("create", req.body)
      await prismaFac.general.create({
        data: req.body,
      });
    }

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

const updateSettingsUnit = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("updateSettingsUnit", req.body);

    await prismaFac.general.update({
      where: { type: req.body.name },
      data: { value: req.body.object },
    });

    next();
  } catch (error) {
    next(error);
  }
};

const updateSettingsApproves = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("updateSettingsApproves", req.body);

    await prismaFac.general.update({
      where: { type: "approves" },
      data: { value: req.body.datas },
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
  updateSettingsUnit,
  updateSettingsApproves,
  deleteSettings,
};
