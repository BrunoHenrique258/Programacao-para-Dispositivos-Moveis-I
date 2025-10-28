export interface Usuario {
  cod_usuario?: number;
  nome: string;
  email: string;
  senha: string;
  tipo: 'admin' | 'professor' | 'aluno';
}

export interface Aluno {
  cod_aluno?: number;
  nome: string;
  matricula: string;
  curso: string;
}

export interface Professor {
  cod_professor?: number;
  nome: string;
  titulacao: string;
  tempo_docencia: number;
}

export interface Disciplina {
  cod_disciplina?: number;
  nome: string;
  carga_horaria: number;
  professor_id: number;
}

export interface Boletim {
  cod_boletim?: number;
  aluno_id: number;
  disciplina_id: number;
  nota: number;
  media: number;
}
