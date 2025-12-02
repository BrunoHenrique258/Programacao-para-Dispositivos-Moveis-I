// backend/controllers/AuthController.ts
import { Request, Response } from "express";
import { pool } from "../database/connection";
import bcrypt from "bcryptjs";

export class AuthController {

  static async register(req: Request, res: Response) {
    try {
      const { nome, email, senha, tipo } = req.body;

      if (!nome || !email || !senha || !tipo) {
        return res.status(400).json({ message: "Dados incompletos" });
      }

      const existe = await pool.query(
        "SELECT 1 FROM usuarios WHERE email = $1",
        [email]
      );

      if (existe.rowCount && existe.rowCount > 0) {
        return res.status(400).json({ message: "Email já cadastrado" });
      }

      const hash = bcrypt.hashSync(senha, 10);

      const insert = await pool.query(
        `INSERT INTO usuarios (nome, email, senha_hash, tipo)
         VALUES ($1, $2, $3, $4)
         RETURNING cod_usuario, nome, email, tipo`,
        [nome, email, hash, tipo]
      );

      return res.status(201).json({ usuario: insert.rows[0] });

    } catch (e) {
      console.error("Erro no register:", e);
      return res.status(500).json({ message: "Erro interno" });
    }
  }


  static async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const q = await pool.query(
        "SELECT cod_usuario, nome, email, senha_hash, tipo FROM usuarios WHERE email=$1",
        [email]
      );

      const user = q.rows[0];
      if (!user) return res.status(401).json({ message: "Email ou senha inválidos" });

      const valido = await bcrypt.compare(senha, user.senha_hash);
      if (!valido) return res.status(401).json({ message: "Email ou senha inválidos" });

      // Agora NÃO retorna token
      res.json({
        usuario: {
          id: user.cod_usuario,
          nome: user.nome,
          email: user.email,
          tipo: user.tipo
        }
      });

    } catch (e) {
      console.error("Erro no login:", e);
      res.status(500).json({ message: "Erro interno" });
    }
  }
}
