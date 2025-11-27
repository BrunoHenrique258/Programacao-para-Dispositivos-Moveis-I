import { Router } from "express";
import { ProfessorController } from "../controllers/professorController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", auth, ProfessorController.criar);
router.get("/", auth, ProfessorController.listar);

export default router;
