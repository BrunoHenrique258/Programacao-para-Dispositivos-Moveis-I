import { Request, Response } from "express";

interface Aviso {
  id: number;
  titulo: string;
  mensagem: string;
}

let avisos: Aviso[] = [];
let nextId = 1;

export class AvisoController {
  // Listar todos os avisos
  static list(req: Request, res: Response) {
    res.json(avisos);
  }

  // Criar um novo aviso
  static create(req: Request, res: Response) {
    const { titulo, mensagem } = req.body;

    if (!titulo || !mensagem) {
      return res.status(400).json({ message: "Título e mensagem obrigatórios" });
    }

    const novoAviso: Aviso = { id: nextId++, titulo, mensagem };
    avisos.push(novoAviso);

    return res.status(201).json(novoAviso);
  }
}
