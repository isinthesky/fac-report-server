
import express, { Request, Response } from "express"; // 추가
import {  readDeviceDB,
          getUnitGroupList, 
          updateUnitGroupList, 
          updateSettingsTabPage } from "../controllers/reportDevice.controller.js";
import { getDeviceLog } from "../controllers/bmsDB.controller.js";

const router = express.Router();

router.get(
  "/deviceInfo",
  readDeviceDB,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true, deviceInfo: req.deviceSet });
  }
);


router.put(
  "/updateTabPage",
  updateSettingsTabPage,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);
  

router.put(
  "/unitGroupList",
  updateUnitGroupList,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true });
  }
);


router.get("/unitGroupList",
  getUnitGroupList,
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true, data: req.unitGroup.value });
  }
)


router.get(
  "/readDeviceLog/:deviceId/:timestamp",
  getDeviceLog, 
  (req: Request, res: Response): Response => {
    return res.status(200).json({ ok: true, data: req.deviceLog  });
  }
)


export { router as default };
