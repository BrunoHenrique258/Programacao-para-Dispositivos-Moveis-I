import { Router } from "express";
import { AlunoController } from "../controllers/alunoController";
import { auth } from "../middlewares/authMiddleware";
const router = Router();
router.post("/", auth, AlunoController.create);
export default router;
