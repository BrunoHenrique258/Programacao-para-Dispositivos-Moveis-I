import { Request, Response } from "express";
import { pool } from "../database/connection";

export class ProfessorController {
  static async criar(req: Request, res: Response) {
    const { nome, titulacao, tempo_docencia } = req.body;

    if (!nome || !titulacao || !tempo_docencia) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
      await pool.query(
        "INSERT INTO professores (nome, titulacao, tempo_docencia) VALUES ($1, $2, $3)",
        [nome, titulacao, tempo_docencia]
      );

      return res.json({ message: "Professor cadastrado com sucesso!" });
    } catch (e) {
      return res.status(500).json({ message: "Erro ao cadastrar professor." });
    }
  }

  static async listar(req: Request, res: Response) {
    try {
      const q = await pool.query("SELECT * FROM professores ORDER BY nome ASC");
      return res.json(q.rows);
    } catch {
      return res.status(500).json({ message: "Erro ao buscar professores." });
    }
  }
}
