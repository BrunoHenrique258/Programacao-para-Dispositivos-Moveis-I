import { Request, Response } from "express";
import { pool } from "../database/connection";

export class AlunoController {
  static async create(req: Request, res: Response) {
    const { nome, matricula, curso } = req.body;
    if (!nome || !matricula) return res.status(400).json({ message: "Nome e matrícula são obrigatórios" });
    await pool.query(
      "INSERT INTO alunos (nome, matricula, curso) VALUES ($1, $2, $3)",
      [nome, matricula, curso || null]
    );
    res.status(201).json({ message: "Aluno criado" });
  }
}
