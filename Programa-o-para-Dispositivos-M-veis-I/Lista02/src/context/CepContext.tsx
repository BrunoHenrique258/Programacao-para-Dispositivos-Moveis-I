import React, { createContext, useState, useContext } from "react";
import { CepResponse } from "../types/CepTypes";
import { getCep } from "../services/viaCep";

// Tipo do contexto incluindo histórico
interface CepContextData {
  cep: string;
  setCep: (cep: string) => void;
  data: CepResponse | null;
  fetchCep: () => Promise<void>;
  historico: CepResponse[];           // adiciona o histórico
  addHistorico: (item: CepResponse) => void; // função para adicionar
}

export const CepContext = createContext<CepContextData>({} as CepContextData);

export const CepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<CepResponse | null>(null);
  const [historico, setHistorico] = useState<CepResponse[]>([]); // array de histórico

  const fetchCep = async () => {
    if (!cep) return;
    const result = await getCep(cep);
    setData(result);

    // adiciona ao histórico
    setHistorico(prev => [...prev, result]);
  };

  // Função adicional caso queira adicionar manualmente
  const addHistorico = (item: CepResponse) => {
    setHistorico(prev => [...prev, item]);
  };

  return (
    <CepContext.Provider value={{ cep, setCep, data, fetchCep, historico, addHistorico }}>
      {children}
    </CepContext.Provider>
  );
};

// Hook para consumir o contexto
export const useCep = () => {
  const context = useContext(CepContext);
  if (!context) throw new Error("useCep must be used within CepProvider");
  return context;
};
