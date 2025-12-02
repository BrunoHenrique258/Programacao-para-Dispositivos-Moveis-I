import { api } from "./api";

export interface Aviso {
  id: number;
  titulo: string;
  mensagem: string;
  criado_em: string;
}

export async function listarAvisos(): Promise<Aviso[]> {
  const response = await api.get("/avisos");
  return response.data;
}

export async function criarAviso(aviso: { titulo: string; mensagem: string }) {
  const response = await api.post("/avisos", aviso);
  return response.data;
}
