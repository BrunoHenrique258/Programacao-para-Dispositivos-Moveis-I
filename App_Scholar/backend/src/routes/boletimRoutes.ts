import { Router } from "express";
import { BoletimController } from "../controllers/boletimController";
import { auth } from "../middlewares/authMiddleware";
const router = Router();
router.get("/:matricula", auth, BoletimController.getByMatricula);
export default router;
