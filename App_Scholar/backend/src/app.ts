import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import disciplinaRoutes from "./routes/disciplinaRoutes";
import boletimRoutes from "./routes/boletimRoutes";
import avisoRoutes from "./routes/avisoRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/alunos", alunoRoutes);
app.use("/api/disciplinas", disciplinaRoutes);
app.use("/api/boletim", boletimRoutes);
app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "x-user-id", "x-user-tipo"],
  })
);

app.use("/api/avisos", avisoRoutes);

const port = Number(process.env.PORT || 3004);

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});

