import { Router } from "express";
import { AlunoController } from "../controllers/alunoController";
import { auth } from "../middlewares/authMiddleware";

console.log("AlunoController:", AlunoController); 
console.log("AlunoController.create:", AlunoController.create); 

const router = Router();
router.post("/", auth, AlunoController.create);

export default router;
