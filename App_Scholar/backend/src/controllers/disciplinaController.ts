import { Request, Response } from "express";
import { pool } from "../database/connection";

export class DisciplinaController {
  static async create(req: Request, res: Response) {
    const { nome, cargaHoraria, professor } = req.body;
    if (!nome) return res.status(400).json({ message: "Nome obrigatório" });
    await pool.query(
      "INSERT INTO disciplinas (nome, carga_horaria, professor) VALUES ($1, $2, $3)",
      [nome, Number(cargaHoraria) || null, professor || null]
    );
    res.status(201).json({ message: "Disciplina criada" });
  }
}
