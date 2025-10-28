import { Request, Response } from "express";
import { pool } from "../database/connection";

export class BoletimController {
  static async getByMatricula(req: Request, res: Response) {
    const { matricula } = req.params;
    const sql = `
      SELECT d.nome AS disciplina, n.nota1, n.nota2, (COALESCE(n.nota1,0)+COALESCE(n.nota2,0))/2 AS media
      FROM notas n
      JOIN alunos a ON a.id = n.aluno_id
      JOIN disciplinas d ON d.id = n.disciplina_id
      WHERE a.matricula = $1
      ORDER BY d.nome;
    `;
    const r = await pool.query(sql, [matricula]);
    res.json({ itens: r.rows });
  }
}
