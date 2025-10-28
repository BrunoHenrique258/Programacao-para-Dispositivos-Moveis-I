import { Router } from "express";
import { DisciplinaController } from "../controllers/disciplinaController";
import { auth } from "../middlewares/authMiddleware";
const router = Router();
router.post("/", auth, DisciplinaController.create);
export default router;
