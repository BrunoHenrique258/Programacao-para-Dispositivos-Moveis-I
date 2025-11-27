// backend/routes/boletimRoutes.ts
import { Router } from "express";
import { BoletimController } from "../controllers/boletimController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", auth, BoletimController.listar);              // Admin e Professor veem todos — Aluno vê só os dele
router.get("/aluno/:id", auth, BoletimController.listarPorAluno);
router.put("/:id", auth, BoletimController.editar);          // Admin + Professor

export default router;
