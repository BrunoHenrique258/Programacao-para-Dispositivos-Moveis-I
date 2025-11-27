import { Request, Response } from "express";
import { pool } from "../database/connection";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthController {
  // ---------------- LOGIN ----------------
  static async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const q = await pool.query(
      "SELECT * FROM usuarios WHERE email=$1",
      [email]
    );

    const user = q.rows[0];
    if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

    const ok = await bcrypt.compare(senha, user.senha_hash);
    if (!ok) return res.status(401).json({ message: "Credenciais inválidas" });

    const token = jwt.sign(
      { id: user.cod_usuario, tipo: user.tipo },
      process.env.JWT_SECRET as string,
      { expiresIn: "8h" }
    );

    return res.json({
      token,
      tipo: user.perfil,
      usuario: {
        id: user.id,
        email: user.email,
        nome: user.nome,
        perfil: user.perfil
      }
    });
  }

  // ---------------- REGISTRO ----------------
  static async register(req: Request, res: Response) {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha || !tipo)
      return res.status(400).json({ message: "Dados incompletos" });

    const hash = await bcrypt.hash(senha, 10);

    // cria usuário
    const u = await pool.query(
      "INSERT INTO usuarios (nome, email, senha_hash, tipo) VALUES ($1,$2,$3,$4) RETURNING cod_usuario, tipo",
      [nome, email, hash, tipo]
    );

    const userId = u.rows[0].cod_usuario;

    // cria aluno se tipo = aluno
    if (tipo === "aluno") {
      const { matricula, curso } = req.body;
      await pool.query(
        "INSERT INTO alunos (usuario_id, matricula, curso) VALUES ($1,$2,$3)",
        [userId, matricula, curso]
      );
    }

    // cria professor se tipo = professor
    if (tipo === "professor") {
      const { titulacao, tempo_docencia } = req.body;
      await pool.query(
        "INSERT INTO professores (usuario_id, titulacao, tempo_docencia) VALUES ($1,$2,$3)",
        [userId, titulacao, tempo_docencia]
      );
    }

    return res.json({ message: "Usuário criado com sucesso" });
  }
}
