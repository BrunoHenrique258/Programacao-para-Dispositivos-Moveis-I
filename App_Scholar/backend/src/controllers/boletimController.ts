// backend/controllers/BoletimController.ts
import { Request, Response } from "express";
import { pool } from "../database/connection";

export class BoletimController {

  // ============================
  // LISTAR boletins
  // ============================
  static async listar(req: Request, res: Response) {
    const user = (req as any).user;

    try {
      // Se for aluno → só vê o dele
      if (user.perfil === "aluno") {
        const q = await pool.query(
          `SELECT b.cod_boletim, b.nota, b.media,
                  a.nome AS aluno,
                  d.nome AS disciplina
           FROM boletins b
           JOIN alunos a ON a.cod_aluno = b.aluno_id
           JOIN disciplinas d ON d.cod_disciplina = b.disciplina_id
           WHERE aluno_id = $1`,
          [user.sub]
        );
        return res.json(q.rows);
      }

      // Professor e Admin → veem todos
      const q = await pool.query(
        `SELECT b.cod_boletim, b.nota, b.media,
                a.nome AS aluno,
                d.nome AS disciplina
         FROM boletins b
         JOIN alunos a ON a.cod_aluno = b.aluno_id
         JOIN disciplinas d ON d.cod_disciplina = b.disciplina_id`
      );

      return res.json(q.rows);

    } catch (e) {
      res.status(500).json({ message: "Erro ao buscar boletins" });
    }
  }

  // ============================
  // LISTAR boletins por aluno
  // ============================
  static async listarPorAluno(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const q = await pool.query(
        `SELECT b.cod_boletim, b.nota, b.media,
                a.nome AS aluno,
                d.nome AS disciplina
         FROM boletins b
         JOIN alunos a ON a.cod_aluno = b.aluno_id
         JOIN disciplinas d ON d.cod_disciplina = b.disciplina_id
         WHERE aluno_id = $1`,
        [id]
      );

      res.json(q.rows);

    } catch (e) {
      res.status(500).json({ message: "Erro ao listar boletins do aluno" });
    }
  }

  // ============================
  // EDITAR boletim
  // ============================
  static async editar(req: Request, res: Response) {
    const user = (req as any).user;

    if (user.perfil === "aluno") {
      return res.status(403).json({ message: "Aluno não pode editar boletim" });
    }

    const { id } = req.params;
    const { nota, media } = req.body;

    try {
      await pool.query(
        "UPDATE boletins SET nota=$1, media=$2 WHERE cod_boletim=$3",
        [nota, media, id]
      );

      res.json({ message: "Boletim atualizado" });

    } catch (e) {
      res.status(500).json({ message: "Erro ao editar boletim" });
    }
  }
}
