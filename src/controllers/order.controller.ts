import { Request, Response, NextFunction } from "express";
import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";
import { PrismaClient as PrismaClientFac } from "../../prisma/src/generated/clientFac";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { parseStringPromise } from "xml2js";

const prismaBMS = new PrismaClientBMS({
  log: ["query", "info", "warn", "error"],
});

const prismaFac = new PrismaClientFac({
  log: ["query", "info", "warn", "error"],
});

import { TEST_A_Table, TEST_B_Table, XML_DST_PATH } from "../env.js";

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

const getXmlFiles = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const getSubPathsAndFileNames = (dir: string): Array<[string, string, string]> => {
      const result: Array<[string, string, string]> = [];

      // test ///////////////
      const __dirname = dirname(fileURLToPath(import.meta.url));
      path.join(__dirname, "../public");
      ////////////////////////

      // console.log("dir", path.join(dir));

      // Read the directory
      const items = fs.readdirSync(path.join(dir));

      for (const item of items) {
        const fullPath = path.join(dir, item);

        if (fs.statSync(fullPath).isFile()) {
          result.push([dir, item, fs.readFileSync(fullPath, "utf-8")]);
        } else {
          result.push(...getSubPathsAndFileNames(fullPath));
        }
      }

      return result;
    };

    req.xmlFiles = getSubPathsAndFileNames(String(XML_DST_PATH));

    next();
  } catch (error) {
    next(error);
  }
};

const getXml2DeviceList = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    async function extractIdAndNm(xml: string) {
      try {
        const extractedData = [];
        const parsedData = await parseStringPromise(xml);

        if (parsedData.logicalfolder != undefined) {
          const lpts = parsedData.logicalfolder.logicalpoints[0].lpt;

          for (const lpt of lpts) {
            extractedData.push({
              id: lpt.$.id,
              nm: lpt.$.nm,
              xmlid: lpt.$.xmlid,
            });
          }
        }

        if (extractedData.length < 1) {
          return false;
        } else {
          return extractedData;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    const appendDevicesFunc = async (
      station: string,
      division: string,
      xml: string
    ): any => {
      const result = await extractIdAndNm(xml);
      if (result != false) {
        return await Promise.all(
          result.map((item) => {
            return { stn: station, div: division, name: item.nm, xmlID: item.id };
          })
        );
      }
      return false;
    };

    const xmlStations = [];
    const xmlDivisions = [];
    req.xmlDevices = [];

    for (const xml of req.xmlFiles) {
      const path = String(xml[0]).split("/");

      if (path[4]) {
        xmlStations.push(path[3]); // station
        xmlDivisions.push(path[3] + "," + path[4]);
        const resDevice = await appendDevicesFunc(path[3], path[4], xml[2]);

        // console.log("appendDevicesFunc", resDevice);
        if (resDevice != false) {
          req.xmlDevices.push(resDevice);
        }
      }
    }

    req.xmlStations = Array.from(new Set(xmlStations));
    req.xmlDivisions = Array.from(new Set(xmlDivisions));

    next();
  } catch (error) {
    next(error);
  }
};

export { getDateLog, getXmlFiles, getXml2DeviceList };
