import { Router } from "express";
import { AvisoController } from "../controllers/avisoController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", auth, AvisoController.list);
router.post("/", auth, AvisoController.create);

export default router;
