import express, { Request, Response } from "express"; // 추가
import { getDateLog } from "../controllers/order.controller.js";
import { downloadXml } from "../controllers/ftp.controller.js";

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

export { router as default };
