import express, { Request, Response } from "express"; // 추가
import { fetchTodos } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/report", (req: Request, res: Response): Response => {
  return res.status(200).json({ ok: true });
});

export { router as default };
