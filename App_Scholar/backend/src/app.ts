import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import disciplinaRoutes from "./routes/disciplinaRoutes";
import boletimRoutes from "./routes/boletimRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/alunos", alunoRoutes);
app.use("/api/disciplinas", disciplinaRoutes);
app.use("/api/boletim", boletimRoutes);

const port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
