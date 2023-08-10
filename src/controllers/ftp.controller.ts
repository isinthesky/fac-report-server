import { Request, Response, NextFunction } from "express";
import ftp from "basic-ftp";
import X2JS from "x2js";
import fs from "fs";
import { FTP_HOST, FTP_PASSWORD, FTP_USER, XML_DST_PATH, XML_SRC_PATH } from "../env.js";

const client = new ftp.Client();

const downloadXml = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const pth = req.device[0].point_path.split("/");

    client.ftp.verbose = true;

    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASSWORD,
    });

    await client.downloadTo(
      XML_DST_PATH + pth[2] + ".xml",
      XML_SRC_PATH + pth[1] + "/" + pth[2] + "/" + pth[2] + ".xml"
    );

    client.close();

    const data = await fs.promises.readFile("data/" + pth[2] + ".xml", "utf8");

    const x2js = new X2JS();
    const js = x2js.xml2js(data);

    for (const point of js.logicalfolder.logicalpoints.lpt) {
      if (point._id == pth[3]) {
        console.info("Finded!", point._id, point._nm, point._pth);
        break;
      }
    }

    next();
  } catch (error) {
    console.error(error);

    client.close();
    next(error);
  }
};

export { downloadXml };
