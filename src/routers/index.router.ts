import express, { Request, Response } from "express"; // 추가
import {
  getDateLog,
  getXmlFiles,
  getXml2DeviceList,
} from "../controllers/order.controller.js";
import { downloadXml } from "../controllers/ftp.controller.js";
import {
  resetDeviceDB,
  readSettings,
  createSettings,
  updateSettingsColRow,
  deleteSettings,
  updateSettingsApproves,
} from "../controllers/reportSetting.controller.js";

const router = express.Router();

router.get("/report", (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true });
});

router.post(
  "/report",
  getDateLog,
  downloadXml,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);


router.get("/settings", readSettings, (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true, settings: req.settings });
});


router.post(
  "/createSettings",
  createSettings,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);

router.post(
  "/resetXml",
  getXmlFiles,
  getXml2DeviceList,
  resetDeviceDB,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);

router.delete("/general", deleteSettings, (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true });
});

router.put(
  "/updateSettingsColRow",
  updateSettingsColRow,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);


router.put(
  "/updateSettingsApprove",
  updateSettingsApproves,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);

export { router as default };
