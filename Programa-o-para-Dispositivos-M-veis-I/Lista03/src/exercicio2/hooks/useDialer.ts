import { useCallback } from "react";
import { Linking, Alert } from "react-native";
import { getDialerUrl } from "../services/dialerService";

export function useDialer() {
  const openDialer = useCallback(async () => {
    const phoneNumber = "5511999999999"; // número exemplo (código do país + DDD + número)
    const url = getDialerUrl(phoneNumber);

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", "Não foi possível abrir o discador do dispositivo.");
      }
    } catch (error) {
      Alert.alert("Erro inesperado", "Ocorreu um problema ao abrir o discador.");
    }
  }, []);

  return { openDialer };
}
