import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "http://localhost:3001/api", // <- ajuste para IP da sua máquina
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("@token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
