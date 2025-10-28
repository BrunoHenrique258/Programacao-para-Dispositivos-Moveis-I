import { Request, Response } from "express";
import { pool } from "../database/connection";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, senha } = req.body;
    if (!email || !senha) return res.status(400).json({ message: "Email e senha obrigatórios" });

    const q = await pool.query("SELECT id, email, senha_hash, perfil FROM usuarios WHERE email=$1", [email]);
    const user = q.rows[0];
    if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

    const ok = await bcrypt.compare(senha, user.senha_hash);
    if (!ok) return res.status(401).json({ message: "Credenciais inválidas" });

    const token = jwt.sign({ sub: user.id, email: user.email, perfil: user.perfil }, process.env.JWT_SECRET as string, { expiresIn: "8h" });
    return res.json({ token });
  }
}
