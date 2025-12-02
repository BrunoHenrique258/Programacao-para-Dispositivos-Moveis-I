import { Request, Response, NextFunction } from "express";

// Middleware de autenticação (desativado)
export function auth(req: Request, res: Response, next: NextFunction) {
  // 🔓 AUTENTICAÇÃO DESATIVADA: passa direto
  next();
}
