import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientFac } from "../../prisma/src/generated/clientFac/index.js";
import { CustomRequest } from "../static/interfaces.js";

const prismaFac = new PrismaClientFac();

const resetDeviceDB = async function (req: CustomRequest, res: Response, next: NextFunction) {
  try {
    await Promise.all([
      prismaFac.Device.deleteMany({}),
      prismaFac.Division.deleteMany({}),
      prismaFac.Station.deleteMany({})
    ]);

    console.log("req.xmlDivisions", req.xmlDivisions)
    
    const dbStations = req.xmlStations;
    const dbDivisions = await Promise.all(
      req.xmlDivisions.map((path: string) => {
        const item = path.split(",");
        return { station: item[0], name: item[1] };
      })
    );
    const dbDevices = req.xmlDevices;



    // Station 데이터 생성
    const stationsData = Array.from(dbStations).map(item => ({ name: item }));
    await prismaFac.Station.createMany({ data: stationsData });

    // Station 데이터 조회 및 매핑
    const arrStation = await prismaFac.Station.findMany({});
    
    const stationMap = new Map();
    for (const data of arrStation) {
      stationMap.set(data.name, data.id);
    }
    
    const divisionsData = Array.from(dbDivisions).map(item => ({
      stationId: stationMap.get(item.station),
      name: item.name
    }));
    await prismaFac.Division.createMany({ data: divisionsData });

    // Device 데이터 생성
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
          type: item.type,
        });
      }
    }

    await prismaFac.Device.createMany({ data: listDevice });

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

      // console.log("readSettings", key, set)
      set.value["id"] = set.id;
      select[key] = set.value;
    }

    // console.log("select", select);
    
    req.settings = select;

    next();
  } catch (error) {
    next(error);
  }
};

const createSettings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const key = await prismaFac.general.findFirst({where: {type: req.body.type}})
    // console.log("create setting", key)

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

    // console.log("updateSettings", updated);

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
    // console.log("deleteSettings", settings);
    next();
  } catch (error) {
    next(error);
  }
};

export {
  resetDeviceDB,
  readSettings,
  createSettings,
  updateSettingsColRow,
  updateSettingsApproves,
  deleteSettings,
};
