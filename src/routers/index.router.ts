import express, { Request, Response } from "express"; // 추가
import {
  getDateLog,
  getXmlFiles,
  getXml2DeviceList,
} from "../controllers/order.controller.js";
import { downloadXml } from "../controllers/ftp.controller.js";
import {
  readDeviceDB,
  resetDeviceDB,
  readSettings,
  createSettings,
  updateSettings,
  deleteSettings,
} from "../controllers/facDB.controller.js";

const router = express.Router();

router.get("/report", (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true });
});

router.post(
  "/report",
  getDateLog,
  // downloadXml,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);

router.get(
  "/getDeviceInfo",
  getXmlFiles,
  getXml2DeviceList,
  resetDeviceDB,
  readDeviceDB,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true, deviceInfo: req.deviceSet });
  }
);

router.get("/getSettings", readSettings, (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true, settings: req.settings });
});

router.post(
  "/createSettings",
  createSettings,
  // deleteSettings,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true, settings: req.settings });
  }
);

router.put("/updateSettings", updateSettings, (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true });
});

export { router as default };
